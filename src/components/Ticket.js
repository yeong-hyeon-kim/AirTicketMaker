function Ticket() {
  return (
    <div className="Backplate">
      <header className="Header">
        <div className="HeaderGridOne">
          <h3>My Airline ✈️</h3>
        </div>
        <div className="HeaderGridTwo">
          <h3>PRESTIGE</h3>
        </div>
        <div className="HeaderGridThree">
          <h3>탑승권</h3>
        </div>
        <div className="HeaderGridFour">
          <h3>BOARDING PASS</h3>
        </div>
      </header>
      <hr></hr>
      <div className="Stage">
        <div className="StageGridOne">
          <div className="ItemGroup">
            <p>NAME&nbsp;</p>
            <p>ㅤ</p>
            <p>
              <b>KIM I NA</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>FLIGHT</p>
            <p>ㅤ</p>
            <p>
              <b>KE 011</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>FROM&nbsp;</p>
            <p>ㅤ</p>
            <p>
              <b>INC</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>TO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>ㅤ</p>
            <p>
              <b>LHR</b>
            </p>
          </div>
          <div className="ItemGroup">
            <table className="ArrivalTable">
              <tbody>
                <tr>
                  <td>
                    <p>BOARDING</p>
                    <h2>19 : 30</h2>
                  </td>
                  <td>
                    <p>GATE</p>
                    <h2>10</h2>
                  </td>
                  <td>
                    <p>DEP TIME</p>
                    <h2>01 : 00</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ItemGroup">
            <p>PR LOUNGE SERVICE</p>
            <p>ㅤ</p>
            <p>
              <b>VVIP</b>
            </p>
          </div>
          <div className="ItemGroup"></div>
        </div>
        <div className="StageGridTwo">
          <div></div>
        </div>
        <div className="StageGridThree">
          <div className="ItemGroup">
            <p>NAME</p>
            <p>ㅤ</p>
            <p>
              <b>KIM I NA</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>FROM</p>
            <p>ㅤ</p>
            <p>
              <b>INC</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>TO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>ㅤ</p>
            <p>
              <b>LHR</b>
            </p>
          </div>
          <div className="ItemGroup">
            <p>DATE&nbsp;</p>
            <p>ㅤ</p>
            <p>
              <b>30 JAN 2022</b>
            </p>
          </div>
          <div className="ItemGroup">
            <table className="SeatTable">
              <tbody>
                <tr>
                  <td>
                    <p>Seat</p>
                    <h2>A1</h2>
                  </td>
                  <td>
                    <p>Flight</p>
                    <h2>A380</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Boarding gate closes at 10minutes before departure. (항공기 정시출발을
          위하여 출발 10분전에 탑승이 마감됩니다.)
        </p>
      </footer>
    </div>
  );
}

export default Ticket;
