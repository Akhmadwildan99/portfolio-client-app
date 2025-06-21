const articles = [
  {
    id: 1,
    slug: "state-management-react-vite-pokemon-app",
    title: "State Management di React Vite Berdasarkan Proyek Pokemon-App",
    date: "May 1, 2025",
    description:
      "React telah menjadi salah satu library JavaScript paling populer untuk membangun antarmuka pengguna (UI) yang dinamis dan responsif. Dengan pendekatan berbasis komponen dan kemampuan untuk mengelola state secara efisien, React memungkinkan pengembang menciptakan aplikasi web yang interaktif dan mudah dipelihara.",
    content: `React telah menjadi salah satu library JavaScript paling populer untuk membangun antarmuka pengguna (UI) yang dinamis dan responsif. Dengan pendekatan berbasis komponen dan kemampuan untuk mengelola state secara efisien, React memungkinkan pengembang menciptakan aplikasi web yang interaktif dan mudah dipelihara.

## Pendahuluan dan Konteks Proyek

Dalam konteks ini, artikel ini akan membahas secara mendalam bagaimana state management diimplementasikan dalam proyek open source bernama pokemon-app-exercise-web-client-5 yang tersedia di GitHub. Proyek ini menggunakan React dengan TypeScript dan Vite sebagai build tool, dan menjadi studi kasus yang menarik untuk memahami praktik pengelolaan state di aplikasi React modern tanpa menggunakan library manajemen state eksternal seperti Redux atau MobX.

## Konsep Dasar State Management di React Vite

State management merupakan aspek fundamental dalam pengembangan aplikasi React karena state menentukan bagaimana UI merespons interaksi pengguna dan perubahan data. Di React, pengelolaan state dilakukan dengan berbagai cara, mulai dari state lokal di dalam komponen hingga state global yang dibagikan antar komponen.

### useState Hook

useState adalah hook dasar yang digunakan untuk mengelola state lokal pada sebuah komponen:

\`\`\`javascript
const [pokemonList, setPokemonList] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
\`\`\`

### useEffect untuk Side Effects

useEffect berperan penting dalam menangani side effect dan lifecycle komponen:

\`\`\`javascript
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      if (!response.ok) throw new Error('Gagal mengambil data');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);
\`\`\`

## Custom Hooks untuk Modularitas

Custom hooks menjadi alat yang sangat berguna untuk mengabstraksi logika pengelolaan state:

\`\`\`javascript
function useFetchPokemon() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemonApi() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) throw new Error('Gagal mengambil data Pokémon');
        const result = await response.json();
        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonApi();
  }, []);

  return { data, loading, error };
}
\`\`\`

## Context API untuk State Global

Untuk pengelolaan state global yang perlu dibagikan antar banyak komponen, React menyediakan Context API:

\`\`\`javascript
import React, { createContext, useState } from 'react';

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [state, setState] = useState({
    pokemonList: [],
    selectedPokemon: null,
  });

  return (
    <PokemonContext.Provider value={{ state, setState }}>
      {children}
    </PokemonContext.Provider>
  );
}
\`\`\`

## Peran Vite dalam State Management

Vite memainkan peran yang sangat penting dalam mendukung pengembangan aplikasi React, khususnya dalam konteks pengelolaan state yang dinamis dan kompleks. Salah satu fitur utama Vite yang sangat membantu adalah Hot Module Replacement (HMR). Dengan HMR, ketika pengembang melakukan perubahan pada kode sumber, Vite dapat memperbarui modul yang berubah secara langsung di browser tanpa melakukan reload halaman penuh.

## Best Practices

1. **Konsistensi dalam penggunaan hooks** - Gunakan useState dan useEffect dengan tepat
2. **Pemisahan logika bisnis dan UI** - Manfaatkan custom hooks untuk modularitas
3. **Pengelolaan state yang terstruktur** - Gunakan Context API untuk state global
4. **Penanganan error yang baik** - Selalu sertakan error handling dalam pengambilan data
5. **Memanfaatkan keunggulan Vite** - Gunakan HMR untuk pengembangan yang efisien

## Kesimpulan

Pendekatan state management yang digunakan dalam proyek pokemon-app-exercise-web-client-5 menonjolkan penggunaan React hooks seperti useState dan useEffect untuk mengelola state lokal dan side effect, serta pemanfaatan custom hooks untuk mengabstraksi logika pengambilan data dan pengelolaan loading/error secara modular. Kombinasi React hooks, Context API, dan Vite memberikan fondasi yang kuat dan modern untuk membangun aplikasi React dengan state management yang efektif, efisien, dan mudah dikembangkan.`,
    link: "https://medium.com/@wildante/state-management-di-react-vite-berdasarkan-proyek-pokemon-app-1698c65fec98",
  },
  {
    id: 2,
    slug: "develop-pokemon-deck-website-react-hooks",
    title: "Develop Pokemon Deck Website Menggunakan React Hooks",
    date: "April 21, 2024",
    description:
      "Dalam beberapa tahun terakhir, pengembangan aplikasi web telah mengalami kemajuan yang pesat, terutama dengan munculnya pustaka dan framework yang memudahkan developer dalam membangun aplikasi yang interaktif dan responsif.",
    content: `Dalam beberapa tahun terakhir, pengembangan aplikasi web telah mengalami kemajuan yang pesat, terutama dengan munculnya pustaka dan framework yang memudahkan developer dalam membangun aplikasi yang interaktif dan responsif. Salah satu teknologi yang paling menonjol adalah React, sebuah library JavaScript yang dikembangkan oleh Facebook untuk membangun user interface yang dinamis.

## Pengenalan React Hooks

React Hooks adalah fitur revolusioner yang diperkenalkan di React 16.8 yang memungkinkan kita menggunakan state dan lifecycle methods dalam functional components. Sebelum adanya hooks, kita harus menggunakan class components untuk mengelola state dan lifecycle, namun dengan hooks, functional components menjadi lebih powerful dan mudah digunakan.

### Keuntungan React Hooks:
- **Lebih sederhana**: Functional components lebih mudah dibaca dan dipahami
- **Reusable logic**: Custom hooks memungkinkan sharing logic antar komponen
- **Better testing**: Functional components lebih mudah untuk ditest
- **Performance**: Hooks memberikan optimisasi yang lebih baik

## Membangun Pokemon Deck Website

Untuk membangun website Pokemon deck yang interaktif, kita akan menggunakan beberapa hooks utama dan mengintegrasikan dengan Pokemon API untuk mendapatkan data real-time.

### 1. useState untuk State Management

Hook useState adalah fondasi untuk mengelola state dalam komponen:

\`\`\`javascript
import { useState } from 'react';

function PokemonDeck() {
  const [deck, setDeck] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [deckName, setDeckName] = useState('My Pokemon Deck');
  
  const addToDeck = (pokemon) => {
    if (deck.length < 6) { // Maksimal 6 Pokemon dalam deck
      setDeck([...deck, { ...pokemon, id: Date.now() }]);
    } else {
      alert('Deck sudah penuh! Maksimal 6 Pokemon.');
    }
  };
  
  const removeFromDeck = (pokemonId) => {
    setDeck(deck.filter(pokemon => pokemon.id !== pokemonId));
  };
  
  return (
    <div className="pokemon-deck">
      <h1>{deckName}</h1>
      <div className="deck-stats">
        <p>Pokemon dalam deck: {deck.length}/6</p>
      </div>
      <div className="deck-grid">
        {deck.map(pokemon => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <button onClick={() => removeFromDeck(pokemon.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### 2. useEffect untuk API Calls dan Side Effects

useEffect memungkinkan kita melakukan operasi asynchronous seperti fetching data:

\`\`\`javascript
import { useState, useEffect } from 'react';

function PokemonList({ onAddToDeck }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        
        // Fetch detail untuk setiap Pokemon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            return detailResponse.json();
          })
        );
        
        setPokemons(pokemonDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemons();
  }, []);
  
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) return <div className="loading">Loading Pokemon...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  
  return (
    <div className="pokemon-list">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="pokemon-grid">
        {filteredPokemons.map(pokemon => (
          <div key={pokemon.id} className="pokemon-item">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Height: {pokemon.height / 10} m</p>
            <p>Weight: {pokemon.weight / 10} kg</p>
            <button onClick={() => onAddToDeck(pokemon)}>
              Add to Deck
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### 3. Custom Hooks untuk Reusable Logic

Custom hooks memungkinkan kita mengabstraksi logic yang kompleks:

\`\`\`javascript
// Custom hook untuk Pokemon data
function usePokemon(pokemonName) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!pokemonName) return;
    
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          \`https://pokeapi.co/api/v2/pokemon/\${pokemonName.toLowerCase()}\`
        );
        
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemon();
  }, [pokemonName]);
  
  return { pokemon, loading, error };
}

// Custom hook untuk local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };
  
  return [storedValue, setValue];
}
\`\`\`

## Mengintegrasikan Semua Komponen

Berikut adalah komponen utama yang mengintegrasikan semua fitur:

\`\`\`javascript
import React from 'react';
import { useState } from 'react';

function PokemonDeckApp() {
  const [deck, setDeck] = useLocalStorage('pokemonDeck', []);
  const [activeTab, setActiveTab] = useState('browse');
  
  const addToDeck = (pokemon) => {
    if (deck.length < 6) {
      const newPokemon = { ...pokemon, deckId: Date.now() };
      setDeck([...deck, newPokemon]);
    }
  };
  
  const removeFromDeck = (deckId) => {
    setDeck(deck.filter(pokemon => pokemon.deckId !== deckId));
  };
  
  return (
    <div className="pokemon-deck-app">
      <header>
        <h1>Pokemon Deck Builder</h1>
        <nav>
          <button 
            className={activeTab === 'browse' ? 'active' : ''}
            onClick={() => setActiveTab('browse')}
          >
            Browse Pokemon
          </button>
          <button 
            className={activeTab === 'deck' ? 'active' : ''}
            onClick={() => setActiveTab('deck')}
          >
            My Deck ({deck.length}/6)
          </button>
        </nav>
      </header>
      
      <main>
        {activeTab === 'browse' && (
          <PokemonList onAddToDeck={addToDeck} />
        )}
        {activeTab === 'deck' && (
          <PokemonDeck 
            deck={deck} 
            onRemoveFromDeck={removeFromDeck} 
          />
        )}
      </main>
    </div>
  );
}
\`\`\`

## Best Practices dan Tips

### 1. Performance Optimization
- Gunakan \`React.memo\` untuk mencegah unnecessary re-renders
- Implementasikan lazy loading untuk gambar Pokemon
- Gunakan \`useMemo\` dan \`useCallback\` untuk expensive operations

### 2. Error Handling
- Selalu handle error dalam async operations
- Berikan feedback yang jelas kepada user
- Implementasikan retry mechanism untuk failed requests

### 3. User Experience
- Tambahkan loading states yang informatif
- Implementasikan search dan filter functionality
- Gunakan local storage untuk menyimpan deck user

## Kesimpulan

React Hooks memberikan cara yang lebih clean, modular, dan mudah dipahami untuk mengelola state dan side effects dalam aplikasi React. Dengan menggunakan hooks seperti useState, useEffect, dan custom hooks, kita dapat membangun aplikasi Pokemon deck yang interaktif, performant, dan mudah di-maintain.

Keuntungan utama menggunakan React Hooks dalam proyek ini:
- **Kode lebih bersih**: Functional components lebih mudah dibaca
- **Logic reusable**: Custom hooks dapat digunakan di berbagai komponen
- **State management yang efisien**: useState memberikan kontrol penuh atas state
- **Side effect handling**: useEffect mengelola API calls dan lifecycle dengan baik
- **Better developer experience**: Hooks memberikan development experience yang lebih baik

Dengan pendekatan ini, aplikasi Pokemon deck tidak hanya functional tetapi juga scalable dan maintainable untuk pengembangan jangka panjang.`,
    link: "https://medium.com/@wildante/develop-pokemon-dek-website-menggunakan-react-hooks-ffd562c008c9",
  },
  {
    id: 3,
    slug: "mengakses-aplikasi-vue-dari-ponsel-server-lokal",
    title: "Mengakses Aplikasi Vue dari Ponsel yang diinstall di Server Lokal",
    date: "September 2, 2024",
    description:
      "Pertama yang harus diperhatikan adalah ip adress, pastikan ponsel anda dan server lokal anda berada di ip adress yang sama.",
    content: `Ketika mengembangkan aplikasi Vue.js, seringkali kita perlu menguji aplikasi tersebut di perangkat mobile untuk memastikan responsivitas dan user experience yang optimal.

## Langkah-langkah Mengakses Aplikasi Vue dari Ponsel

### 1. Pastikan IP Address yang Sama

Pertama yang harus diperhatikan adalah IP address. Pastikan ponsel Anda dan server lokal Anda berada di IP address yang sama (dalam satu jaringan WiFi).

### 2. Konfigurasi Vue Development Server

Untuk Vue CLI, edit file \`vue.config.js\`:

\`\`\`javascript
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  }
}
\`\`\`

Untuk Vite (Vue 3), edit file \`vite.config.js\`:

\`\`\`javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
\`\`\`

### 3. Menjalankan Development Server

Jalankan server development dengan perintah:

\`\`\`bash
npm run serve
# atau untuk Vite
npm run dev
\`\`\`

### 4. Mencari IP Address Komputer

Di Windows, buka Command Prompt dan ketik:
\`\`\`
ipconfig
\`\`\`

Di macOS/Linux, buka Terminal dan ketik:
\`\`\`
ifconfig
# atau
ip addr show
\`\`\`

Cari IP address yang dimulai dengan 192.168.x.x atau 10.x.x.x

### 5. Mengakses dari Ponsel

Buka browser di ponsel Anda dan akses:
\`\`\`
http://[IP_ADDRESS_KOMPUTER]:8080
# contoh: http://192.168.1.100:8080
\`\`\`

## Troubleshooting

### Firewall
Pastikan firewall tidak memblokir koneksi pada port yang digunakan.

### Network Security
Beberapa router memiliki fitur AP Isolation yang mencegah perangkat saling berkomunikasi. Pastikan fitur ini dinonaktifkan.

## Kesimpulan

Dengan mengikuti langkah-langkah di atas, Anda dapat dengan mudah mengakses aplikasi Vue.js yang berjalan di server lokal dari perangkat mobile. Ini sangat berguna untuk testing responsivitas dan user experience aplikasi Anda.`,
    link: "https://medium.com/@wildante/mengakses-aplikasi-vue-dari-ponsel-yang-diinstall-di-server-lokal-92f80d5829ce",
  },
];

export default articles;