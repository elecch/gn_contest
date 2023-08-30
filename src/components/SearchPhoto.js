import React, { useState } from 'react';
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "rmrxVKbwkEP3PRqkTb0YIkqM78nUjy3u0jb25U6mMxI"
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchP = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <label htmlFor="query" className="label">도시 선택: </label>
        <select
          name="query"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          <option className="null" value="">도시를 선택해주세요</option>
  
  <option value="Geoje(거제)">Geoje(거제)</option>
  <option value="Geochang(거창)">Geochang(거창)</option>
  <option value="Goseong(고성)">Goseong(고성)</option>
  <option value="Gimhae(김해)">Gimhae(김해)</option>
  <option value="Namhae(남해)">Namhae(남해)</option>
  <option value="Miryang(밀양)">Miryang(밀양)</option>
  <option value="Sacheon(사천)">Sacheon(사천)</option>
  <option value="Sancheong(산청)">Sancheong(산청)</option>
  <option value="Yangsan(양산)">Yangsan(양산)</option>
  <option value="Uiryeong(의령)">Uiryeong(의령)</option>
  <option value="Jinju(진주)">Jinju(진주)</option>
  <option value="Changnyeong(창녕)">Changnyeong(창녕)</option>
  <option value="Changwon(창원)">Changwon(창원)</option>
  <option value="Tongyeong(통영)">Tongyeong(통영)</option>
  <option value="Hapcheon(합천)">Hapcheon(합천)</option>
  <option value="Haman(함안)">Haman(함안)</option>
  <option value="Hamyang(함양)">Hamyang(함양)</option>
  <option value="Hadong(하동)">Hadong(하동)</option>
  
        </select>
        <button className="button" type="submit">검색</button>
      </form>
      <div className="card-list">
        {pics.map((picture) => (
          <div className='card' key={picture.id}>
            <img
              src={picture.urls.full}
              alt={picture.alt_description}
              className="card-image"
              width="50%"
              height="50%"
            />
          </div>
        ))}
        {
          pics.length === 0 && query !=="" ? <div>사진이 없어요</div> : null
        }
      </div>
    </div>
  );
}
