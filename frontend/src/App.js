import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { themeSettings } from "theme"
import {useState} from "react"
import Dashboard from 'scenes/dashboard'
import UnitKerja from "scenes/unitkerja"
import BaganAkun from "scenes/baganakun"
import Bank from "scenes/bank"
import Bku from "scenes/bku"
import Login from "scenes/login"
import ManajemenTransaksi from "scenes/manajementransaksi"
import ManajemenUser from "scenes/manajemenuser"
import GrupAkses from "scenes/grupakses"
import Layout from 'scenes/layout'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {isLogin
            ? <Route path='/' element={<Login />} />
            : <Route element={<Layout />}>
                <Route path='/' element={<Navigate to='/dashboard' replace/>} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/unitkerja' element={<UnitKerja />} />
                <Route path='/baganakun' element={<BaganAkun />} />
                <Route path='/bank' element={<Bank />} />
                <Route path='/bku' element={<Bku />} />
                <Route path='/manajementransaksi' element={<ManajemenTransaksi />} />
                <Route path='/manajemenuser' element={<ManajemenUser />} />
                <Route path='/grupakses' element={<GrupAkses />} />
              </Route>
            }
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
