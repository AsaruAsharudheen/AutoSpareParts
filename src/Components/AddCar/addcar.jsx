import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addcar.css';
import Navbar from '../Navbar/navbar';

const AddCar = () => {
  const API = 'http://localhost:5000/api/cars';
  const UPLOAD_API = 'http://localhost:5000/api/upload';

  const [cars, setCars] = useState([]);
  const [carName, setCarName] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [modelName, setModelName] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [partName, setPartName] = useState('');
  const [partImages, setPartImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get(API);
      setCars(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch cars');
    }
  };

  // ➕ Add Car
  const addCar = async () => {
    if (!carName.trim()) return toast.warn('Enter car name');
    try {
      await axios.post(API, { name: carName });
      toast.success('✅ Car added successfully!');
      setCarName('');
      fetchCars();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add car');
    }
  };

  // ➕ Add Model
  const addModel = async () => {
    if (!selectedCar) return toast.warn('Select a car first');
    if (!modelName.trim()) return toast.warn('Enter model name');
    try {
      await axios.post(`${API}/${selectedCar}/models`, { name: modelName });
      toast.success('✅ Model added successfully!');
      setModelName('');
      fetchCars();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add model');
    }
  };

  // ➕ Add Year
  const addYear = async () => {
    if (!selectedCar || !selectedModel)
      return toast.warn('Select both car and model');
    if (!yearValue.trim()) return toast.warn('Enter year');
    try {
      await axios.post(`${API}/${selectedCar}/models/${selectedModel}/years`, {
        year: yearValue,
      });
      toast.success('✅ Year added successfully!');
      setYearValue('');
      fetchCars();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add year');
    }
  };

  // ➕ Add Part
  const addPart = async () => {
    if (!selectedCar || !selectedModel || !selectedYear)
      return toast.warn('Select car, model & year');
    if (!partName.trim()) return toast.warn('Enter part name');

    try {
      let imageUrls = [];

      if (partImages.length > 0) {
        const formData = new FormData();
        partImages.forEach(img => formData.append('images', img));

        const uploadRes = await axios.post(UPLOAD_API, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        imageUrls = uploadRes.data.imageUrls;
      }

      await axios.post(
        `${API}/${selectedCar}/models/${selectedModel}/years/${selectedYear}/parts`,
        { name: partName, images: imageUrls }
      );

      toast.success('✅ Part added successfully!');
      setPartName('');
      setPartImages([]);
      setPreviewUrls([]);
      fetchCars();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add part');
    }
  };

  const handleImageChange = e => {
    const files = Array.from(e.target.files);
    setPartImages(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  const getModels = () => cars.find(c => c._id === selectedCar)?.models || [];
  const getYears = () =>
    getModels().find(m => m._id === selectedModel)?.years || [];

  return (
    <>
      <div className="addcar-wrapper">
        <ToastContainer position="top-right" autoClose={2500} />

        <h1>🚗 Car Database Management</h1>

        {/* Add Car */}
        <div className="card-box">
          <h2>1️⃣ Add Car</h2>
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter Car Name"
              value={carName}
              onChange={e => setCarName(e.target.value)}
            />
            <button onClick={addCar}>+ Add Car</button>
          </div>
        </div>

        {/* Add Model */}
        <div className="card-box">
          <h2>2️⃣ Add Model</h2>
          <div className="input-row">
            <select
              value={selectedCar}
              onChange={e => {
                setSelectedCar(e.target.value);
                setSelectedModel('');
              }}
            >
              <option value="">Select Car</option>
              {cars.map(car => (
                <option key={car._id} value={car._id}>
                  {car.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter Model Name"
              value={modelName}
              onChange={e => setModelName(e.target.value)}
            />
            <button onClick={addModel}>+ Add Model</button>
          </div>
        </div>

        {/* Add Year */}
        <div className="card-box">
          <h2>3️⃣ Add Year</h2>
          <div className="input-row">
            <select
              value={selectedCar}
              onChange={e => {
                setSelectedCar(e.target.value);
                setSelectedModel('');
              }}
            >
              <option value="">Select Car</option>
              {cars.map(car => (
                <option key={car._id} value={car._id}>
                  {car.name}
                </option>
              ))}
            </select>

            <select
              value={selectedModel}
              onChange={e => setSelectedModel(e.target.value)}
            >
              <option value="">Select Model</option>
              {getModels().map(m => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter Year"
              value={yearValue}
              onChange={e => setYearValue(e.target.value)}
            />
            <button onClick={addYear}>+ Add Year</button>
          </div>
        </div>

        {/* Add Part */}
        <div className="card-box">
          <h2>4️⃣ Add Parts</h2>
          <div className="input-row">
            <select
              value={selectedCar}
              onChange={e => {
                setSelectedCar(e.target.value);
                setSelectedModel('');
                setSelectedYear('');
              }}
            >
              <option value="">Select Car</option>
              {cars.map(car => (
                <option key={car._id} value={car._id}>
                  {car.name}
                </option>
              ))}
            </select>

            <select
              value={selectedModel}
              onChange={e => {
                setSelectedModel(e.target.value);
                setSelectedYear('');
              }}
            >
              <option value="">Select Model</option>
              {getModels().map(m => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {getYears().map(y => (
                <option key={y._id} value={y._id}>
                  {y.year}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter Part Name"
              value={partName}
              onChange={e => setPartName(e.target.value)}
            />

            <input type="file" multiple onChange={handleImageChange} />

            <button onClick={addPart}>+ Add Part</button>
          </div>

          <div className="image-preview">
            {previewUrls.map((url, index) => (
              <img key={index} src={url} alt="preview" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCar;
