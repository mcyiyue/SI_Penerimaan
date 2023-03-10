const Modules = [
    {
        id: '1',
        nama: 'Referensi',
        sub_modules:[
            {
                id: '1',
                nama: 'Unit Kerja',
                route:'unitkerja'
            },
            {
                id: '2',
                nama: 'Bagan Akun',
                route: 'baganakun'
            },
            {
                id: '3',
                nama: 'Bank',
                route: 'bank'
            }
        ]
    },
    {
        id: '2',
        nama: 'Bendahara Penerimaan',
        sub_modules:[
            {
                id: '4',
                nama: 'Buku Kas Umum',
                route: 'bku'
            },
            {
                id: '5',
                nama: 'Manajemen Transaksi',
                route: 'manajementransaksi'
            }
        ]
    },
    {
        id: '3',
        nama: 'Administrasi',
        sub_modules:[
            {
                id: '6',
                nama: 'Manajemen User',
                route: 'manajemenuser'
            },
            {
                id: '7',
                nama: 'Grup Akses',
                route: 'grupakses'
            }
        ]
    }
]

export default Modules