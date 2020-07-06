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
   * временный префикс ссылки для картинок
   */
  public testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/bot/1.01/assets/";

  public testPathToAssetsRet(){
    return this.testPathToAssets;
  }

  getFormCommunication(){
    return this.botStore.getFormCommunication();
  }

  getHeader(){
    return this.botStore.getHeader();
  }

  getProductPresentation(){
    return this.botStore.getProductPresentation();
  }

  getProductInformation(){
    return this.botStore.getProductInformation();
  }

  getTransitionCreateBot(){
    return this.botStore.getTransitionCreateBot();
  }

  getPerformanceAndBenefits(){
    return this.botStore.getPerformanceAndBenefits();
  }

  gethConsultation(){
    return this.botStore.gethConsultation();
  }

  getTariffs(){
    return this.botStore.getTariffs();
  }

  getFooter(){
    return this.botStore.getFooter();
  }

}
