.accordion-container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 8919px;
  left: 50%;
  transform: translateX(-50%);
}

.accordion-item {
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  gap: 24px;
}

.accordion-header:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.accordion-title {
  color: rgba(28, 28, 28, 1);
  font-size: 24px;
  font-family: Onest;
  font-weight: 500;
  line-height: 100%;
  flex: 1;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

/* Убираем класс rotated, так как он больше не нужен */
/* .accordion-icon.rotated {
  transform: rotate(45deg);
} */

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content.open {
  max-height: 500px;
}

.accordion-content-inner {
  padding: 0 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.accordion-text {
  color: rgba(127, 127, 127, 1);
  font-size: 18px;
  font-family: Onest;
  font-weight: 400;
  line-height: 120%;
  display: block;
}

/* Для мобильных устройств */
@media (max-width: 768px) {
  .accordion-container {
    width: calc(100% - 40px);
    left: 50%;
    transform: translateX(-50%);
  }
  
  .accordion-title {
    font-size: 18px;
  }
  
  .accordion-text {
    font-size: 16px;
  }
  
  .accordion-header {
    padding: 16px;
  }
  
  .accordion-content-inner {
    padding: 0 16px 16px 16px;
  }
}