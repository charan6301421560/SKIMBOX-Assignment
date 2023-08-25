import React from 'react';

function Options({ selectedOption, handleOptionChange }) {
  return (
    <div className="options">
    {/* Option 1 */}
    <div
      className={`option-11 ${selectedOption === 'option1' ? 'selected' : ''}`}
      id="option11"
    >
      <div className="radio-1">
        <div className="option-content">
          <input
            type="radio"
            id="option1"
            name="bundleOption"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          <label
            htmlFor="option1"
            className='option-1'
          >
            <div className="option-details">
              <h1 className='pairs'>1 Pair</h1>
              <div className='price-details'>
                <h1>DKK&nbsp; </h1>
                <h1 className="price" id="price2"> 195.00
                </h1>
              </div>
            </div>
          </label>
          <br />
          <div className='option-discount'>
            <h1>50% OFF</h1>
          </div>
        </div>
        {selectedOption === 'option1' && ( 
          <div className="hidden">
            <div className="size">
              <h3>Size</h3>
              <div className="size-select">
                <div className="drop-down">
                  <h4 className="hash">#1</h4>
                  <select id="product" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="color">
              <h3>Colour</h3>
              <div className="color-select">
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
       )}
      </div>
    </div>

    {/* Option 2 */}
    <div
      className={`option-11 ${selectedOption === 'option2' ? 'selected' : ''}`}
      id="option12"
    >
      <div className="radio-1">
        <div className="option-content">
          <input
            type="radio"
            id="option2"
            name="bundleOption"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          <label
            htmlFor="option2"
            className='option-1'
          >
            <div className="option-details">
              <h1  className='pairs'>2 Pair</h1>
              <div className='price-details'>
                <h1>DKK&nbsp; </h1>
                <h1 className="price" id="price2"> 345.00
                </h1>
              </div>
            </div>
          </label>
          <br />
          <div className='original-price'>
            <div className='lineThrogh'>
            <p>DKK</p>
            <p>195.00</p>
            </div>
          </div>
          <div className='option-discount'>
          <div >
            <h2>Most Popular</h2>
            <h1>40% OFF</h1>
          </div>
          </div>
        </div>
        {selectedOption === 'option2' && (
          <div className="hidden">
            <div className="size">
              <h3>Size</h3>
              <div className="size-select">
                <div className="drop-down">
                  <h4 className="hash">#1</h4>
                  <select id="product" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
                <div className="drop-down">
                  <h4 className="hash2">#2</h4>
                  <select id="product1" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="color">
              <h3>Colour</h3>
              <div className="color-select">
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Option 3 */}
    <div
      className={`option-11 ${selectedOption === 'option3' ? 'selected' : ''}`}
      id="option13"
    >
      <div className="radio-1">
        <div className="option-content">
          <input
            type="radio"
            id="option3"
            name="bundleOption"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          <label
            htmlFor="option3"
            className='option-1'
          >
            <div className="option-details">
              <h1  className='pairs'>3 Pair</h1>
              <div className='price-details'>
                <h1>DKK&nbsp; </h1>
                <h1 className="price" id="price2"> 528.00
                </h1>
              </div>
            </div>
          </label>
          <br />
          <div className='original-price'>
            <div className='lineThrogh'>
            <p>DKK</p>
            <p>195.00</p>
            </div>
          </div>
          <div className='option-discount'>                 <h1>60% OFF</h1>
          </div>
        </div>
        {selectedOption === 'option3' && (
          <div className="hidden">
            <div className="size">
              <h3>Size</h3>
              <div className="size-select">
                <div className="drop-down">
                  <h4 className="hash">#1</h4>
                  <select id="product" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
                <div className="drop-down">
                  <h4 className="hash2">#2</h4>
                  <select id="product1" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
                <div className="drop-down">
                  <h4 className="hash2">#3</h4>
                  <select id="product1" name="product">
                    <option value="option1">S</option>
                    <option value="option1">M</option>
                    <option value="option1">L</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="color">
              <h3>Colour</h3>
              <div className="color-select">
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
                <div>
                  <select id="color" name="color">
                    <option value="" disabled selected>
                      Choose
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default Options;