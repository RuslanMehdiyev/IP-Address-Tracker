function Info({ data }) {
  return (
    <div>
      {Object.keys(data).length > 0 && (
        <div className="info">
          <div>
            <p>IP Address</p>
            <h3>{data.ip}</h3>
          </div>
          <div className="line"></div>
          <div>
            <p>Location</p>
            <h3>
              {data.city}, {data.country}
            </h3>
          </div>
          <div className="line"></div>
          <div>
            <p>Timezone</p>
            <h3>
              {data.timezone}, {data.utc_offset}
            </h3>
          </div>
          <div className="line"></div>
          <div>
            <p>ISP</p>
            <h3>{data.org}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
