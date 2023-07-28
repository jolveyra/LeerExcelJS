import fs from "fs";
import path from "path";
import excel from "exceljs";

async function leerTodosLosArchivosExcelEnDirectorio(directoryPath) {
  try {
    const archivos = fs.readdirSync(directoryPath);

    for (const archivo of archivos) {
      if (path.extname(archivo) === ".xlsx") {
        const filePath = path.join(directoryPath, archivo);
        console.log(`Leyendo datos del archivo: ${filePath}`);
        const datos = await leerDatosExcel(filePath);
        if (datos) {
          console.log("Datos leídos del archivo Excel:");
          console.table(datos);
        }
      }
    }
  } catch (error) {
    console.error("Error al leer los archivos Excel:", error.message);
  }
}

// Función para leer los datos del archivo Excel
async function leerDatosExcel(filePath) {
  try {
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const datos = [];

    worksheet.eachRow((row, rowNumber) => {
      const fila = row.values;
      datos.push(fila);
    });

    return datos;
  } catch (error) {
    console.error("Error al leer el archivo Excel:", error.message);
    return null;
  }
}

// Llama a la función para leer todos los archivos Excel en el directorio
const directorio = "./";
leerTodosLosArchivosExcelEnDirectorio(directorio).then((datos) => {
  if (datos) {
    console.log("Datos leídos del archivo Excel:");
    console.log(datos);
    console.table(datos);
  }
});