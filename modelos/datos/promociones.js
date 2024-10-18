import "dotenv/config.js";
import "../../config/database.js";
import Promocion from "../Promocion.js";

let promociones = [
  {
    marca: "Polar",
    fecha: "2024-11-05T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "Descuento del 20% en cervezas Polar por la compra de 2 packs.",
  },
  {
    marca: "Postobón",
    fecha: "2024-11-10T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion: "Promoción: 2x1 en gaseosas Postobón durante todo noviembre.",
  },
  {
    marca: "Savoy",
    fecha: "2024-12-01T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "Descuento del 15% en todos los chocolates Savoy por tiempo limitado.",
  },
  {
    marca: "Alpina",
    fecha: "2024-12-15T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion:
      "Ofertas en lácteos Alpina: compra 3 y paga 2 en productos seleccionados.",
  },
  {
    marca: "Harina Pan",
    fecha: "2024-11-20T00:00:00.000Z",
    linea_supermercados: "Jumbo",
    descripcion:
      "Promoción exclusiva en Harina Pan: 10% de descuento por cada dos unidades.",
  },
  {
    marca: "Nutrimix",
    fecha: "2024-12-05T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "Descuento del 20% en productos Nutrimix para bebés durante diciembre.",
  },
  {
    marca: "Mavesa",
    fecha: "2024-12-18T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion: "Compra 2 productos Mavesa y llévate el tercero gratis.",
  },
  {
    marca: "Colombina",
    fecha: "2024-12-22T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "15% de descuento en galletas y dulces Colombina por compras superiores a 5 unidades.",
  },
  {
    marca: "Plumrose",
    fecha: "2024-12-30T00:00:00.000Z",
    linea_supermercados: "Jumbo",
    descripcion:
      "Promoción navideña: hasta 20% de descuento en embutidos Plumrose.",
  },
  {
    marca: "Nestlé Venezuela",
    fecha: "2025-01-05T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion: "Compra 3 helados Nestlé y paga solo 2 durante enero.",
  },
  {
    marca: "Ramo",
    fecha: "2024-11-08T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "Ofertas especiales en productos de la marca Ramo: 10% de descuento.",
  },
  {
    marca: "Empresas Polar",
    fecha: "2024-12-02T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion:
      "Gran promoción en bebidas Empresas Polar con un 10% de descuento por caja.",
  },
  {
    marca: "Diana",
    fecha: "2024-12-10T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion:
      "Descuento del 15% en aceites Diana en compras mayores a 3 unidades.",
  },
  {
    marca: "Maltín Polar",
    fecha: "2024-11-15T00:00:00.000Z",
    linea_supermercados: "Jumbo",
    descripcion:
      "Promoción: 2x1 en bebidas Maltín Polar durante la primera quincena de noviembre.",
  },
  {
    marca: "Arroz Diana",
    fecha: "2025-01-10T00:00:00.000Z",
    linea_supermercados: "Carulla",
    descripcion: "15% de descuento en arroz Diana por la compra de 2 kilos.",
  },
  {
    marca: "Alquería",
    fecha: "2024-12-25T00:00:00.000Z",
    linea_supermercados: "Éxito",
    descripcion: "Lleva 4 productos Alquería y paga solo 3 en todo diciembre.",
  },
  {
    marca: "Harina Pan",
    fecha: "2025-01-20T00:00:00.000Z",
    linea_supermercados: "Jumbo",
    descripcion:
      "Rebajas de enero en Harina Pan: 25% de descuento en paquetes de 1 kilo.",
  },
];

Promocion.insertMany(promociones);
