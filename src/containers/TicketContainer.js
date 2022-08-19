// 컨테이너 컴포넌트
// 리덕스 스토어 상태를 조회하거나, 액션을 디스패치(발생시키는 것)할 수 있는 컴포넌트를 의미.
// 다른 프로젠테이셔널 컴포넌트들을 불러와서 사용.
import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Ticket from "../components/Ticket";
import {
  SetAirLine,
  SetSeatClass,
  SetLoungeClass,
  SetFlight,
  SetName,
  SetFrom,
  SetTo,
  SetDate,
  SetBoardingTime,
  SetDepTime,
  SetSeat,
  SetGate,
} from "../modules/ticket";

function TicketContainer() {
  // 해당 값이 중 어느 하나라도 변경되면 렌더링
  const {
    airline,
    seatclass,
    loungeclass,
    flight,
    name,
    from,
    to,
    date,
    boardingtime,
    deptime,
    seat,
    gate,
  } = useSelector(
    // State Property : state.module.property
    (state) => ({
      airline: state.ticket.airline,
      seatclass: state.ticket.seatclass,
      loungeclass: state.ticket.loungeclass,
      flight: state.ticket.flight,
      name: state.ticket.name,
      from: state.ticket.from,
      to: state.ticket.to,
      date: state.ticket.date,
      boardingtime: state.ticket.boardingtime,
      deptime: state.ticket.deptime,
      seat: state.ticket.seat,
      gate: state.ticket.gate,
    }),
    // react-redux에 내장되어있는 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교해준다.
    shallowEqual
  );

  // useDispatch는 리덕스 스토의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook.
  const dispatch = useDispatch();

  const setAirLine = (AirLine) => dispatch(SetAirLine(AirLine));
  const setSeatClass = (SeatClass) => dispatch(SetSeatClass(SeatClass));
  const setLoungeClass = (LoungeClass) => dispatch(SetLoungeClass(LoungeClass));
  const setFlight = (Flight) => dispatch(SetFlight(Flight));
  const setName = (Name) => dispatch(SetName(Name));
  const setFrom = (From) => dispatch(SetFrom(From));
  const setTo = (To) => dispatch(SetTo(To));
  const setDate = (Date) => dispatch(SetDate(Date));
  const setBoardingTime = (BoardingTime) =>
    dispatch(SetBoardingTime(BoardingTime));
  const setDepTime = (DepTime) => dispatch(SetDepTime(DepTime));
  const setSeat = (Seat) => dispatch(SetSeat(Seat));
  const setGate = (Gate) => dispatch(SetGate(Gate));

  return (
    <Ticket
      AirLine={airline}
      SeatClass={seatclass}
      LoungeClass={loungeclass}
      Flight={flight}
      Name={name}
      From={from}
      To={to}
      Date={date}
      BoardingTime={boardingtime}
      DepTime={deptime}
      Seat={seat}
      Gate={gate}
    ></Ticket>
  );
}

export default TicketContainer;
