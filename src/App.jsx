import './App.css';
const token = import.meta.env.VITE_API_TOKEN;

function App() {

  return (
    <section>
      <p>
        This is my greeting: {token}
      </p>
    </section>

  )
}

export default App
