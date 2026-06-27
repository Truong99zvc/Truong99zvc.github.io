import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision (CV)",
    "Retrieval-Augmented Generation (RAG)",
    "LLMs",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "FAISS",
    "Docling",
    "RAGAS"
];

const labelsSecond = [
    "Python",
    "C++",
    "JavaScript",
    "SQL",
    "FastAPI",
    "SQLAlchemy",
    "Pydantic",
    "OpenAI API",
    "PostgreSQL"
];

const labelsThird = [
    "Git",
    "GitHub/GitLab",
    "Docker",
    "DVC",
    "CVAT 2.0",
    "ONNX",
    "TensorRT",
    "Intel OpenVINO",
    "Model Context Protocol (MCP)",
    "Google Cloud Platform (GCP)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>Experienced in building, training, and fine-tuning deep learning models using PyTorch for computer vision (object detection, segmentation) and designing advanced RAG architectures with model-evaluation (RAGAS) frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Software & API Development</h3>
                    <p>Capable of engineering production-ready backends and clean RESTful APIs using FastAPI, implementing database systems with PostgreSQL/SQLAlchemy, and building robust schemas using Pydantic.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>MLOps & Optimization</h3>
                    <p>Experienced in managing ML lifecycles with DVC and CVAT 2.0, containerizing systems using Docker, and optimizing neural networks to ONNX/TensorRT formats for high-throughput, low-latency edge deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;