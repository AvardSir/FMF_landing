// import BlueSmallCheckbox from 'BlueSmallChekcbox'  // ← убрал лишний "="
import BlueSmallChekcbox from './../BlueSmallChekcbox/BlueSmallChekcbox';
// import { BlueSmallChekcbox } from 'BlueSmallChekcbox';

// import "AccordionSectio.css"
import "./AccordionSection.css"  // ← две точки


const AccordionSection = () => {
  return (
    <>
      <div className="joint3-thq-frame1077-elm">
        <div className="joint3-thq-frame1049-elm">
          <div className="joint3-thq-frame755-elm">
            <div className="joint3-thq-frame1051-elm1">
              <span className="joint3-thq-text-elm156">
                Можно ли «Complex SW СУСТАВЫ» принимать с другими
                препаратами
              </span>
              <img alt="Frame386761" src="public/frame386761-hulo.svg" className="joint3-thq-frame38-elm1" />
            </div>
          </div>
          <div className="joint3-thq-frame761-elm">
            <div className="joint3-thq-frame1052-elm">
              <div className="joint3-thq-frame1051-elm2">
                <span className="joint3-thq-text-elm157">
                  Какие противопоказания?
                </span>

                <BlueSmallChekcbox /> {/* ← теперь работает */}

              </div>
            </div>
            <span className="joint3-thq-text-elm158">
              Противопоказанием является индивидуальная непереносимость
              компонентов препарата.
            </span>
          </div>
          {/* ... остальной код ... */}

          </div>
          <div className="joint3-thq-frame762-elm">
            <div className="joint3-thq-frame1051-elm3">
              <span className="joint3-thq-text-elm159">
                Почему в форме порошка, а не капсул?
              </span>
              <img alt="Frame386761" src="public/frame386761-uqwf.svg" className="joint3-thq-frame38-elm3" />
            </div>
          </div>
          <div className="joint3-thq-frame763-elm">
            <div className="joint3-thq-frame1051-elm4">
              <span className="joint3-thq-text-elm160">
                Какие показания для приема комплекса
              </span>
              <img alt="Frame386761" src="public/frame386761-47n.svg" className="joint3-thq-frame38-elm4" />
            </div>
        </div>
      </div>
    </>
  );
};

export default AccordionSection;