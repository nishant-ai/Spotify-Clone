import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <img src={Icon} alt="" className="sidebarOption__icon" />}

      {Icon ? (
        <h4 className="sidebarOption__title">{title}</h4>
      ) : (
        <p className="sidebarOption__title">{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
