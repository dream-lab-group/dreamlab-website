function Kontakt() {
  return (
    <section id="kontakt" className="content">
      <div className="groupLeft">
        <h1>Kontaktiere uns!</h1>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="groupRight">
        <form>
          <div className="upperGroup">
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="E-Mail" />
          </div>
          <div className="lowerGroup">
                <input type="text" name="nachricht" id="nachricht" placeholder="Nachricht" />
          </div>
          <button type="submit">SENDEN</button>
        </form>
      </div>
    </section>
  )
}

export default Kontakt
