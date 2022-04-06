import React, { useState } from 'react';
import '../../index.css'
import '../Send/Send.css'

const Send = () => {
    const [formValue, setFormValue] = useState('');

  return (
    <form>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button type="submit" disabled={!formValue}>SEND🕊️</button>
    </form>
  )
}

export default Send