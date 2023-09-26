import Input from '../../Componenets/Input';
import './Color.css';

export default function Color({handleChange}) {
  return (
    <div>
      <h2 className='sidbar-title color-title'>Color</h2>

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value='' name='test' />
          <span className='checkmark'></span>All
        </label>

      <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      color="black"
      />
      <Input
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color="black"
      />
      <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test1"
      color="black"
      />
      <Input
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      color="black"
      />
      <label className='sidebar-label-container'>
        <input type='radio' onChange={handleChange} value="white" name='test1'/>
        <span className='checkmark' style={{background: "white", border: "2px solid black"}}></span>white
      </label>
      
    </div>
  )
}
