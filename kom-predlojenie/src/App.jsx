import './App.css'
import Page1 from './component/Page1'

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
  finalPrice: 18000
}


function App() {
  return (
    <Page1 items={items} total={total} />
  )
}

export default App



