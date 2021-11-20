import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import p from '../pages'
import Home from '../pages/Home.pages'

console.log(p);

const Links = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="*" element={<Navigate to ="/" />}/>
  </Routes>
)

export default Links