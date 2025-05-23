// Espera que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se há uma imagem salva no localStorage e a carrega
  const savedProfileImage = localStorage.getItem('profileImage');
  if (savedProfileImage) {
      document.getElementById('profileImage').src = savedProfileImage;
  }
  
  // Evento para alterar a foto de perfil
  document.getElementById('uploadPhoto').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              const profileImage = document.getElementById('profileImage');
              profileImage.src = e.target.result;
              
              // Salva a imagem no localStorage para persistência
              localStorage.setItem('profileImage', e.target.result);
          }
          reader.readAsDataURL(file);
      }
  });
  
  // Salva os dados do perfil quando editados
  const editableFields = document.querySelectorAll('[contenteditable="true"]');
  editableFields.forEach(field => {
      // Carrega dados salvos anteriormente
      const savedValue = localStorage.getItem(field.id);
      if (savedValue) {
          field.textContent = savedValue;
      }
      
      // Salva ao perder o foco
      field.addEventListener('blur', function() {
          localStorage.setItem(this.id, this.textContent);
      });
      
      // Salva ao pressionar Enter e remove o foco
      field.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              this.blur();
          }
      });
  });
});


function alterarSenha() {
  alert ("Suas informações foram alteradas com sucesso.");
};