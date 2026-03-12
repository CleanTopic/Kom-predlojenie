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

  const generatePDF = async () => {
    
    const element = document.getElementById('pdf').outerHTML;
    const response = await fetch("localhost:3000/pdf/generate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ html: element })
    }
    )

    if (!response.ok) {
      console.error('Ошибка при генерации PDF');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf';
    document.body.appendChild(a);
    a.click();
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



