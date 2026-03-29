import {MsSolicitudesApplication} from './application';

export async function migrate(args: string[]) {
  const app = new MsSolicitudesApplication();
  await app.boot();
  try {
    await app.migrateSchema({existingSchema: 'alter'});
    console.log('✅ Migración completada');
  } catch (err) {
    console.error('❌ Error en la migración:', err);
    process.exit(1); // fuerza a que npm muestre fallo
  }
}

migrate(process.argv).catch(err => {
  console.error('❌ Error inesperado:', err);
  process.exit(1);
});
