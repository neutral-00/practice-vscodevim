class InterestCalculator {
  private _principal: number;
  public get principal(): number {
    return this._principal;
  }
  public set principal(value: number) {
    if (!isNaN(value)) this._principal = value;
  }
  private _rate: number;
  public get rate(): number {
    return this._rate;
  }
  public set rate(value: number) {
    if (!isNaN(value)) this._rate = value;
  }
  private _term: number;
  public get term(): number {
    return this._term;
  }
  public set term(value: number) {
    if (!isNaN(value)) this._term = value;
  }
  calculateSimpleInterest(): number {
    return this._principal * this._rate * this._term * 0.01;
  }
  InterestCalculator(principal: number, rate: number, term: number) {
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(term)) {
      this.principal = principal;
      this.rate = rate;
      this.term = term;
    }
  }
}
