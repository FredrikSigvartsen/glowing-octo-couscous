import { observable, action, decorate } from 'mobx';

class ShopModel {
  compassDirection = -20;

  cagesActive = [{ title: '1' }, { title: '2' }];

  cagesInactive = [{ title: '103' }];

  AddActiveCage() {
    this.cagesActive.push({ title: `${this.cagesActive.length + 1}` });
  }

  RemoveLastActiveCage() {
    if (this.cagesActive.length > 0) {
      const removedCage = this.cagesActive.pop();
      return removedCage !== undefined;
    }
    return false;
  }

  AddInactiveCage() {
    this.cagesInactive.push({ title: `${this.cagesInactive.length + 1}` });
  }

  RemoveLastInactiveCage() {
    if (this.cagesInactive.length > 0) {
      const removedCage = this.cagesInactive.pop();
      return removedCage !== undefined;
    }
    return false;
  }

  DecrementCompassDirection() {
    this.compassDirection -= 1;
  }

  IncrementCompassDirection() {
    this.compassDirection += 1;
  }
}

decorate(ShopModel, {
  compassDirection: observable,
  cagesActive: observable,
  cagesInactive: observable,
  AddActiveCage: action,
  RemoveLastActiveCage: action,
  AddInactiveCage: action,
  RemoveLastInactiveCage: action,
  DecrementCompassDirection: action,
  IncrementCompassDirection: action,
});

const ShopStore = new ShopModel();

export default ShopStore;
