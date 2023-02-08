import React from 'react'

const Contact = () => {
  return <div className='contact'>
        <main>
            <h2>Contact Us</h2>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Abc' />
                </div>
            
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc@email.com' />
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>
                <button type='submit'>Send</button>

            </form>

        </main>
    </div>
}

export default Contact