/**
 * Applies the wholesale tables migration directly to the active POSTGRES_URL database.
 * Run: pnpm tsx scripts/apply-wholesale-migration.ts
 */
import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join } from 'path';

config({ path: '.env' });

const sql = neon(process.env.POSTGRES_URL!);

async function main() {
  const migrationPath = join(process.cwd(), 'lib', 'drizzle', '0003_wholesale_tables.sql');
  const migrationSql = readFileSync(migrationPath, 'utf-8');

  // Split on drizzle's breakpoint marker and run each statement
  const statements = migrationSql
    .split('--> statement-breakpoint')
    .map((s) => s.trim())
    .filter(Boolean);

  console.log(`Applying ${statements.length} SQL statements to ${process.env.POSTGRES_URL?.match(/\/([^/?]+)\?/)?.[1] ?? 'database'}...`);

  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    try {
      await sql(stmt);
      process.stdout.write(`  [${i + 1}/${statements.length}] ✓\r`);
    } catch (err: any) {
      if (err?.message?.includes('already exists')) {
        process.stdout.write(`  [${i + 1}/${statements.length}] skipped (already exists)\r`);
      } else {
        console.error(`\n  [${i + 1}] FAILED: ${err?.message}`);
        console.error('  Statement:', stmt.substring(0, 120));
        process.exit(1);
      }
    }
  }

  console.log('\n✅  Wholesale tables migration applied.');
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
