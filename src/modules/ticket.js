// 액션 타입
const SET_AIR_LINE = "ticket/SET_AIR_LINE";
const SET_SEAT_CLASS = "ticket/SET_SEAT_CLASS";
const SET_LOUNGE_CLASS = "ticket/SET_LOUNGE_CLASS";
const SET_FLIGHT = "ticket/SET_FLIGHT";
const SET_NAME = "ticket/SET_NAME";
const SET_FROM = "ticket/SET_FROM";
const SET_TO = "ticket/SET_TO";
const SET_DATE = "ticket/SET_DATE";
const SET_BOARDING_TIME = "ticket/SET_BOARDING_TIME";
const SET_DEP_TIME = "ticket/SET_DEP_TIME";
const SET_SEAT = "ticket/SET_SEAT";
const SET_GATE = "ticket/SET_GATE";

// 액션 함수
export const SetAirLine = (airline) => ({
  type: SET_AIR_LINE,
  airline,
});

export const SetSeatClass = (seatclass) => ({
  type: SET_SEAT_CLASS,
  seatclass,
});

export const SetLoungeClass = (loungeclass) => ({
  type: SET_LOUNGE_CLASS,
  loungeclass,
});

export const SetFlight = (flight) => ({
  type: SET_FLIGHT,
  flight,
});

export const SetName = (name) => ({
  type: SET_NAME,
  name,
});

export const SetFrom = (from) => ({
  type: SET_FROM,
  from,
});

export const SetTo = (to) => ({
  type: SET_TO,
  to,
});

export const SetDate = (date) => ({
  type: SET_DATE,
  date,
});

export const SetBoardingTime = (boardingtime) => ({
  type: SET_BOARDING_TIME,
  boardingtime,
});

export const SetDepTime = (deptime) => ({
  type: SET_DEP_TIME,
  deptime,
});

export const SetSeat = (seat) => ({
  type: SET_SEAT,
  seat,
});

export const SetGate = (gate) => ({
  type: SET_GATE,
  gate,
});

// 초기 state 정의
// 배열이 아닌 객체로 선언해야한다.
const InitialState = {
  airline: "My AirLine",
  seatclass: "PRESTIGE",
  loungeclass: "VVIP",
  flight: "KE 11",
  name: "KIM I NA",
  from: "INC",
  to: "LHR",
  date: "30 JAN 2022",
  boardingtime: "19 : 30",
  deptime: "01 : 00",
  seat: "A1",
  gate: "10",
};

// 리듀서
export default function ticket(state = InitialState, action) {
  console.log(state);
  // 액션 타입 확인.
  switch (action.type) {
    case SET_AIR_LINE:
      console.log(action.airline);

      return {
        ...state,
        airline: action.airline,
      };
    case SET_SEAT_CLASS:
      return {
        ...state,
        seatclass: action.seatclass,
      };
    case SET_LOUNGE_CLASS:
      return {
        ...state,
        loungeclass: action.loungeclass,
      };
    case SET_FLIGHT:
      return {
        ...state,
        flight: action.flight,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_FROM:
      return {
        ...state,
        from: action.from,
      };
    case SET_TO:
      return {
        ...state,
        to: action.to,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      };
    case SET_BOARDING_TIME:
      return {
        ...state,
        boardingtime: action.boardingtime,
      };
    case SET_DEP_TIME:
      return {
        ...state,
        deptime: action.deptime,
      };
    case SET_SEAT:
      return {
        ...state,
        seat: action.seat,
      };
    case SET_GATE:
      return {
        ...state,
        gate: action.gate,
      };
    default:
      return state;
  }
}
