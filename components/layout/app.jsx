import React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer"

const App = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default App;