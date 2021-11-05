export class ValidationException extends Error {
    static indentPerLevel = 2;

    childen: Array<ValidationException>;
    bullet: string = "";

    constructor(message:string);
    constructor(message: string, _children: Array<ValidationException>);
    constructor(message: string, _children = new Array<ValidationException>()) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
      let children = new Array<ValidationException>();
      for(let child of _children) {
        children.push(...child.simplify());
      }
      this.childen = children;
    }

    withBullet(bullet: string) {
      this.bullet = bullet;
      return this;
    }

    simplify(): Array<ValidationException> {
      if(this.toString().length > 0) {
        return new Array(this);
      }
      return this.childen;
    }
    summary(level:number ): string {
      let spaces = new Array(level * ValidationException.indentPerLevel).join(" ");
      return spaces + this.bullet + this.message;
    }

    prettyStr(level = 0): string {
      let parts = new Array<string>();
      let nextLevel = level;
      
      if(this.message != null && this.message.length > 0) {
        parts.push(this.summary(level));
        nextLevel++;
      }

      for(let child of this.childen) {
        parts.push(child.prettyStr(nextLevel));
      }

      let ret = parts.join("\n");
      return ret;
    }

    toString(): string {
      return this.prettyStr();
    }
  }
