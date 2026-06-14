// import BlueSmallCheckbox from 'BlueSmallChekcbox'  // ← убрал лишний "="
import BlueSmallChekcbox from './../BlueSmallChekcbox/BlueSmallChekcbox';
// import { BlueSmallChekcbox } from 'BlueSmallChekcbox';

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
      </div>
    </>
  );
};

export default AccordionSection;