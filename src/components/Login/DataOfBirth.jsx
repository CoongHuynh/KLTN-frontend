import { RegGrid, Select } from "../../pages/RegisterPage/styles";
export default function DataOfBirth(
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError
) {
  return (
    <RegGrid style={{ marginBottom: `${dateError ? "90px" : "0"}` }}>
      <Select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </Select>
      <Select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </Select>
      <Select name="bYear" value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
      </Select>
      {dateError && (
        <div className={"input_error input_error_select_large"}>
          <div className={"error_arrow_left"}></div>
          {dateError}
        </div>
      )}
    </RegGrid>
  );
}
