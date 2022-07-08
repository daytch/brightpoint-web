function formatNumber(angka, prefix) {
  return generalNumberConverter(angka, prefix, "");
}
function formatRupiah(angka, prefix) {
  return generalNumberConverter(angka, prefix, "rupiah");
}
function convertDate(tgl) {
  const today = new Date(tgl);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}
const generalNumberConverter = (angka, prefix, tipe) => {
  if (angka) {
    var number_string = angka.toString().replace(/[^,\d]/g, ""),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    if (tipe === "rupiah") {
      return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
    } else {
      return prefix == undefined ? rupiah : rupiah ? rupiah : "";
    }
  } else {
    return "";
  }
};

const allFunctions = {
  formatNumber,
  formatRupiah,
  convertDate,
};

export default allFunctions;
