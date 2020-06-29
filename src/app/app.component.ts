import { Component } from '@angular/core';
import {BotStoreService} from "./bot-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private botStore: BotStoreService) {
  }

  popupComplited

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.popupComplited = true;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
  }

  /**
   * клик по элементам компонента header
   */
  public clickOnHeader({detail}) {
    return console.log("clickOnHeader:", detail);
  }

  getHeader(){
    return this.botStore.getHeader();
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log("clickOnProductPresentation:", detail);
  }

  getProductPresentation(){
    return this.botStore.getProductPresentation();
  }

  /**
   * клик по элементам компонента product-information
   */
  public clickOnProductInformation({detail}) {
    return console.log("clickOnProductInformation:", detail);
  }

  getProductInformation(){
    return this.botStore.getProductInformation();
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnTransitionCreateBot({detail}) {
    return console.log("clickOnTransitionCreateBot:", detail);
  }


  getTransitionCreateBot(){
    return this.botStore.getTransitionCreateBot();
  }

  getPerformanceAndBenefits(){
    return this.botStore.getPerformanceAndBenefits();
  }

  /**
   * клик по элементам компонента PerformanceAndBenefits
   */
  public clickOnPerformanceAndBenefits({detail}) {
    return console.log("PerformanceInformation:", detail);
  }


  /**
   * клик по элементам компонента Consultation
   */
  public clickOnConsultation({detail}) {
    return console.log("Consultation:", detail);
  }

  gethConsultation(){
    return this.botStore.gethConsultation();
  }

  /**
   * клик по элементам компонента Tariffs
   */
  public clickOnTariffs({detail}) {
    return console.log("Tariffs:", detail);
  }

  getTariffs(){
    return this.botStore.getTariffs();
  }

}
