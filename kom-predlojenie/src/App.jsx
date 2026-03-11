import './App.css'
import Page1 from './component/Page1'
import html2pdf from 'html2pdf.js'

const items = [{
  id: 1,
  name: 'Наименование позиции',
  quantity: 1,
  price: 20000,
  discountPercent: 10,
  discountAmount: 2000,
  finalPrice: 18000
  }
  , {
  id: 2,
  name: 'Наименование позиции',
  quantity: 1,
  price: 20000,
  discountPercent: 10,
  discountAmount: 2000,
  finalPrice: 18000
  }
  , {
  id: 3,
  name: 'Наименование позиции',
  quantity: 1,
  price: 20000,
  discountPercent: 10,
  discountAmount: 2000,
  finalPrice: 18000
  }
  , {
  id: 4,
  name: 'Наименование позиции',
  quantity: 1,
  price: 20000,
  discountPercent: 10,
  discountAmount: 2000,
  finalPrice: 18000
  }]

const total = {
  quantity: 1,
  price: 20000,
  discountAmount: 2000,
  finalPrice: 18000,
  lastDayOffer: '01.01.2025'
}


function App() {

  const generatePDF = () => {
    const option = {
      margin: 0,
      filename: 'offer.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    const element = document.getElementById('pdf');
    
    html2pdf().set(option).from(element).save("offer.pdf");
  }

  return (

    <div>
    <div id="pdf"> 
      <Page1 items={items} total={total} />
    </div>
    <button onClick={generatePDF}>Сгенерировать PDF</button>
    </div>
  )
}

export default App



