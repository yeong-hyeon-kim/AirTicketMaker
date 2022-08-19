import React from "react";

function Ticket({
  AirLine,
  SeatClass,
  LoungeClass,
  Flight,
  Name,
  From,
  To,
  Date,
  BoardingTime,
  DepTime,
  Seat,
  Gate,
  onSetAirLine,
  onSetSeatClass,
  onSetLoungeClass,
  onSetFlight,
  onSetName,
  onSetFrom,
  onSetTo,
  onSetDate,
  onSetBoardingTime,
  onSetDepTime,
  onSetSeat,
  onSetGate,
}) {
  // OnChangeEvents.
  const onChangeAirLine = (e) => {
    onSetAirLine(e.target.value);
  };

  const onChangeSeatClass = (e) => {
    onSetSeatClass(e.target.value);
  };

  const onChangeLoungeClass = (e) => {
    onSetLoungeClass(e.target.value);
  };

  const onChangeFlight = (e) => {
    onSetFlight(e.target.value);
  };

  const onChangeName = (e) => {
    onSetName(e.target.value);
  };

  const onChangeFrom = (e) => {
    onSetFrom(e.target.value);
  };

  const onChangeTo = (e) => {
    onSetTo(e.target.value);
  };

  const onChangeDate = (e) => {
    onSetDate(e.target.value);
  };

  const onChangeBoardingTime = (e) => {
    onSetBoardingTime(e.target.value);
  };

  const onChangeDepTime = (e) => {
    onSetDepTime(e.target.value);
  };

  const onChangeSeat = (e) => {
    onSetSeat(e.target.value);
  };

  const onChangeGate = (e) => {
    onSetGate(e.target.value);
  };

  return (
    <div>
      <div className="Backplate">
        <header className="Header">
          <div className="HeaderGridOne">
            <h3>{AirLine}</h3>
          </div>
          <div className="HeaderGridTwo">
            <h3>{SeatClass}</h3>
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
                <b>{Name}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>FLIGHT</p>
              <p>ㅤ</p>
              <p>
                <b>{Flight}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>FROM&nbsp;</p>
              <p>ㅤ</p>
              <p>
                <b>{From}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>TO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>ㅤ</p>
              <p>
                <b>{To}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <table className="ArrivalTable">
                <tbody>
                  <tr>
                    <td>
                      <p>BOARDING</p>
                      <h2>{BoardingTime}</h2>
                    </td>
                    <td>
                      <p>GATE</p>
                      <h2>{Gate}</h2>
                    </td>
                    <td>
                      <p>DEP TIME</p>
                      <h2>{DepTime}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ItemGroup">
              <p>PR LOUNGE SERVICE</p>
              <p>ㅤ</p>
              <p>
                <b>{LoungeClass}</b>
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
                <b>{Name}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>FROM</p>
              <p>ㅤ</p>
              <p>
                <b>{From}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>TO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>ㅤ</p>
              <p>
                <b>{To}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <p>DATE&nbsp;</p>
              <p>ㅤ</p>
              <p>
                <b>{Date}</b>
              </p>
            </div>
            <div className="ItemGroup">
              <table className="SeatTable">
                <tbody>
                  <tr>
                    <td>
                      <p>Seat</p>
                      <h2>{Seat}</h2>
                    </td>
                    <td>
                      <p>Flight</p>
                      <h2>{Flight}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer>
          <p>
            Boarding gate closes at 10minutes before departure. (항공기
            정시출발을 위하여 출발 10분전에 탑승이 마감됩니다.)
          </p>
        </footer>
      </div>
      <div className="EditPlace">
        <h2>Editor</h2>
        <div>
          <input
            id="SetAirLine"
            type="text"
            placeholder="AirLine"
            onChange={onChangeAirLine}
          ></input>
          <input
            id="SetSeatClass"
            type="text"
            placeholder="Seat Class"
            onChange={onChangeSeatClass}
          ></input>
          <input
            id="SetLoungeClass"
            type="text"
            placeholder="Lounge Class"
            onChange={onChangeLoungeClass}
          ></input>
          <input
            id="SetFlight"
            type="text"
            placeholder="Flight"
            onChange={onChangeFlight}
          ></input>
          <input
            id="SetName"
            type="text"
            placeholder="Name"
            onChange={onChangeName}
          ></input>
          <input
            id="SetFrom"
            type="text"
            placeholder="From"
            onChange={onChangeFrom}
          ></input>
          <input
            id="SetTo"
            type="text"
            placeholder="To"
            onChange={onChangeTo}
          ></input>
          <input
            id="SetDate"
            type="text"
            placeholder="Date"
            onChange={onChangeDate}
          ></input>
          <input
            id="SetBoardingTime"
            type="text"
            placeholder="BoardingTime"
            onChange={onChangeBoardingTime}
          ></input>
          <input
            id="SetDepTime"
            type="text"
            placeholder="DepTime"
            onChange={onChangeDepTime}
          ></input>
          <input
            id="SetSeat"
            type="text"
            placeholder="Seat"
            onChange={onChangeSeat}
          ></input>
          <input
            id="SetGate"
            type="text"
            placeholder="Gate"
            onChange={onChangeGate}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
