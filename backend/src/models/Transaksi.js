class Transaksi{

    getLastTotalQuery=`SELECT (SUM(debet) - SUM(kredit)) as totalSum
                    FROM transaksi
                    WHERE bank_alias LIKE ? and tgl < ?`

    getDataTransaksiQuery=`SELECT * FROM transaksi WHERE bank_alias Like ? and tgl between ? and ? ORDER BY status;`
    
    getDataBKUQuery=`SELECT tgl, nim, nama, jenis, unit_nama, COUNT(*) as jTransaksi, status, debet, SUM(debet) as sumDebet, SUM(kredit)
                    FROM transaksi
                    WHERE bank_alias LIKE ? and tgl between ? and ?
                    GROUP BY unit_nama, debet, kredit, jenis, tgl, status ORDER BY tgl ASC;`    
}

module.exports = Transaksi