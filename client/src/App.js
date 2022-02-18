import { useState } from 'react';
import shortenUrl from './services/url.service';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const url = e.target.url.value;
    e.target.url.value = '';

    const response = await shortenUrl(url);
    setShortUrl(`${window.location.origin}/r/${response.code}`);
  };

  return (
    <div className="App">
      <h1>test</h1>
      <form onSubmit={submit}>
        <input type="text" name="url"></input>
        <button>submit</button>
      </form>
      <a href={shortUrl} target="blank">
        {shortUrl}
      </a>
    </div>
  );
}

export default App;
