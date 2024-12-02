import React, { useEffect, useState } from 'react';
import JobItem from '../jobs/JobItem';
import '../../_style/components/Search.scss';
import "../../_style/components/_featuredjob.scss"
const JobItemSection = ({ jobs }) => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    handleSearch();
  }, [jobs]);

  const handleSearch = () => {
    const allJobs = jobs.map((item) => ({
      id: item.id,
      position: item.position,
      salary: item.salary,
      company: item.company.company_name,
      address: item.company.address,
      logo: item.company.logo,
      time_close: item.close_day,
      type: item.type
    }));
    setSearch(allJobs);
  };

  const handleFullStack = () => {
    const fullStackJobs = jobs
      .filter((item) => item.position == 'FullStack')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(fullStackJobs);
  };
  const handleDesign = () => {
    const Design = jobs
      .filter((item) => item.position == 'UI/UX Design')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(Design);
  };
  const handleJavaDev = () => {
    const JavaDev = jobs
      .filter((item) => item.position == 'Java Dev')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(JavaDev);
  };
  const handleReactJSDev = () => {
    const ReactJSDev = jobs
      .filter((item) => item.position == 'ReactJS Dev')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(ReactJSDev);
  };
  const handleLaravelDev = () => {
    const LaravelDev = jobs
      .filter((item) => item.position == 'Laravel Dev')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(LaravelDev);
  };

  const handleFulltime = () => {
    const Fulltime = jobs
      .filter((item) => item.type === 'Full-time')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(Fulltime);
  };

  const handleParttime = () => {
    const Parttime = jobs
      .filter((item) => item.type === 'Part-time')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(Parttime);
  };
  const handleDaNang = () => {
    const DaNang = jobs
      .filter((item) => item.company.address === 'Đà Nẵng')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(DaNang);
  };
  const handleHoChiMinh = () => {
    const HoChiMinh = jobs
      .filter((item) => item.company.address === 'Hồ Chí Minh')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(HoChiMinh);
  };
  const handleHaNoi = () => {
    const HaNoi = jobs
      .filter((item) => item.company.address === 'Hà Nội')
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(HaNoi);
  };
  return (
    <div className="container-search">
      <div className="row-search">
        <div className="col-sm-3-">
          <div className="card-search">
            <form>
              <div className="row">
                <h5>Tìm theo vị trí công việc</h5>
                <label>
                  <input className="checkbox" type="radio" value="Design" name='radio' onClick={handleDesign}/>
                  <span className="textSearch">UI/UX Design</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Java Dev" name='radio' onClick={handleJavaDev}/>
                  <span className="textSearch">Java Dev</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="FullStack" name='radio' onClick={handleFullStack} />
                  <span className="textSearch">FullStack</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="ReactJS Dev" name='radio' onClick={handleReactJSDev} />
                  <span className="textSearch">ReactJS Dev</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Laravel Dev" name='radio' onClick={handleLaravelDev}/>
                  <span className="textSearch">Laravel Dev</span>
                </label>
              </div>
              <div className="row">
                <h5>Tìm theo loại</h5>
                <label>
                  <input className="checkbox" type="radio" value="Full-time" name='radio'  onClick={handleFulltime}/>
                  <span className="textSearch">Full-time</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Part-time" name='radio' onClick={handleParttime}/>
                  <span className="textSearch">Part-time</span>
                </label>
              </div>
              <div className="row">
                <h5>Tìm theo địa chỉ</h5>
                <label>
                  <input className="checkbox" type="radio" value="Đà Nẵng" name='radio' onClick={handleDaNang}/>
                  <span className="textSearch">Đà Nẵng</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Hồ Chí Minh" name='radio' onClick={handleHoChiMinh}/>
                  <span className="textSearch">Hồ Chí Minh</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Hà Nội" name='radio' onClick={handleHaNoi}/>
                  <span className="textSearch">Hà Nội</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-9-">
          <div className="featured_job">
            <div className="container">
              <div className="featured_job--wrapper">
                {search &&
                  search.map((item, index) => (
                    <JobItem
                      key={index}
                      position={item.position}
                      type={item.type}
                      salary={item.salary}
                      company={item.company}
                      address={item.address}
                      logo={item.logo}
                      id={item.id}
                      description={item.description}
                      time_created={item.time_created}
                      time_close={item.time_close}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItemSection;
