import React from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>UIT Academic Policies Chatbot</h2></a>
                <p>Built a RAG chatbot answering academic questions with precise article citations. Powered by FAISS, LangChain, Docling, and Qwen2.5-7B. Achieved 91.2% faithfulness in RAGAS evaluation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc/ai-newsletter-agent" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc/ai-newsletter-agent" target="_blank" rel="noreferrer"><h2>AI Newsletter Agent</h2></a>
                <p>Designed a multi-source daily news scraper and summarizer using GPT-4.1 & GPT-4o-mini. Features automated markdown conversion, duplicate checks via PostgreSQL, and personalized HTML newsletters.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>AI Transcript App</h2></a>
                <p>Built a voice transcription tool utilizing Faster Whisper for high-fidelity speech-to-text. Integrates an LLM pipeline to filter fillers and format raw transcripts into polished text.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>AI UI/UX Tester</h2></a>
                <p>Developed an automated visual QA testing system powered by Llama-3.2-Vision. Drives Playwright to check web layouts across viewports and triggers Discord/Telegram alerts on styling regressions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>Fruit Detection with Faster R-CNN</h2></a>
                <p>Engineered a computer vision pipeline with PyTorch to detect 11 fruit categories. Preprocessed custom datasets in COCO format, achieving a peak validation mAP@[.5:.95] of 0.7243.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>BiM-RNet: Video Frame Interpolation</h2></a>
                <p>Implemented a custom ResNet-based Encoder variant (BiM-RNet) to improve video frame interpolation under complex movement, trained on Vimeo-90K, and deployed via a web interface.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><h2>Vietnamese LLM Hallucination Detection</h2></a>
                <p>Created an NLP classification pipeline using ViDeBERTa with Mixout and R-Drop regularization to classify factuality and hallucinations in Vietnamese LLM output, scoring a 0.7516 Macro-F1 in UIT DSC.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;