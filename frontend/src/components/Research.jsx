import "./Research.css"
import { FaFlask, FaBrain, FaDatabase } from "react-icons/fa"
import { MdOutlineImageSearch } from "react-icons/md"

function Research() {
  return (
    <section className="research" id="research">

      <div className="research-heading">
        <div className="small-title">
          <span></span>
          ACADEMIC RESEARCH
          <span></span>
        </div>

        <h2>
          My <strong>Research.</strong>
        </h2>

        <p>
          My final-year research focuses on applying deep learning
          techniques to a real-world environmental problem.
        </p>
      </div>

      <div className="research-card">

        <div className="research-number">
          FINAL YEAR RESEARCH
        </div>

        <h3>
          Deep Learning-Based Detection and Segmentation of
          Transparent Plastic Waste in Real-World Images
        </h3>

        <p className="research-description">
          This research investigates deep learning-based approaches
          for detecting and segmenting transparent plastic waste in
          real-world environments, with an initial experimental focus
          on transparent PET bottles.
        </p>

        <div className="research-features">

          <div className="research-feature">
            <FaBrain />
            <div>
              <h4>Deep Learning</h4>
              <p>Computer vision-based detection and segmentation.</p>
            </div>
          </div>

          <div className="research-feature">
            <MdOutlineImageSearch />
            <div>
              <h4>Instance Segmentation</h4>
              <p>Identifying and segmenting individual waste objects.</p>
            </div>
          </div>

          <div className="research-feature">
            <FaDatabase />
            <div>
              <h4>Local Dataset</h4>
              <p>Real-world images collected under varied conditions.</p>
            </div>
          </div>

          <div className="research-feature">
            <FaFlask />
            <div>
              <h4>Evaluation</h4>
              <p>Evaluating model performance using standard metrics.</p>
            </div>
          </div>

        </div>

        <div className="research-tags">
          <span>Deep Learning</span>
          <span>Computer Vision</span>
          <span>Instance Segmentation</span>
          <span>Python</span>
        </div>

      </div>

    </section>
  )
}

export default Research