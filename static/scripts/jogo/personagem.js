class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.yInicial = height - altura - variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    
    this.quantidadePulos = 0;
    
    this.invencivel = false;
  }
  
  pula() {
    if (this.quantidadePulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.quantidadePulos++;
      
      return true;
    }
    
    return false;
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
        this.y = this.yInicial;
        this.quantidadePulos = 0;
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    
    const precisao = .7;
    const colisao = collideRectRect(this.x, 
                    this.y, 
                    this.largura * precisao, 
                    this.altura * precisao, 
                    inimigo.x, 
                    inimigo.y, 
                    inimigo.largura * precisao, 
                    inimigo.altura * precisao
    );
    
    return colisao;
  }
}