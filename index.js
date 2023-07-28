import excel from "exceljs";

// Función para leer los datos del archivo Excel
async function leerDatosExcel() {
  try {
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile("./BD.xlsx");
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

// Ejecutar la función para leer los datos del archivo Excel
leerDatosExcel().then((datos) => {
  if (datos) {
    console.log("Datos leídos del archivo Excel:");
    console.log(datos);
    console.table(datos);
  }
});
