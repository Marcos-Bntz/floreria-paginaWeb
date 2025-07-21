# 🌸 Florelia - Ecommerce de Flores

Una aplicación web moderna para una floristería, construida con React, TypeScript, Vite y TailwindCSS.

## 🚀 Características

- **Diseño Responsivo** - Optimizado para móviles y desktop
- **Catálogo de Productos** - Con filtros y búsqueda
- **Carrito de Compras** - Gestión de productos y totales
- **Navegación Intuitiva** - Rutas organizadas y accesibles
- **UI Moderna** - Diseño elegante con TailwindCSS

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework de estilos
- **React Router** - Navegación
- **Zustand** - Gestión de estado
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/[tu-usuario]/floreria-paginaWeb.git
cd floreria-paginaWeb

# Instalar dependencias
npm install
```

## 🏃‍♂️ Ejecutar Localmente

```bash
# Iniciar servidor de desarrollo
npm run dev

# El proyecto estará disponible en http://localhost:5173
```

## 🚀 Desplegar en GitHub Pages

### 1. Configurar el repositorio

Asegúrate de que tu repositorio esté en GitHub y actualiza la URL en `package.json`:

```json
{
  "homepage": "https://[tu-usuario].github.io/floreria-paginaWeb"
}
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama **gh-pages** y la carpeta **/(root)**
5. Haz clic en **Save**

### 3. Desplegar

```bash
# Construir y desplegar
npm run deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── home/           # Componentes de la página principal
│   ├── layout/         # Header, Footer, Layout
│   ├── product/        # Componentes de productos
│   └── ui/            # Componentes de UI básicos
├── pages/              # Páginas principales
├── store/              # Estado global (Zustand)
├── types/              # Definiciones de TypeScript
├── data/               # Datos estáticos
└── utils/              # Utilidades
```

## 🎨 Personalización

### Colores

Los colores están definidos en `src/index.css`:

- Primary: `#9ED5C5` (Verde suave)
- Secondary: `#FEDEDE` (Rosa claro)
- Accent: `#F8F0E5` (Beige)

### Fuentes

- Heading: Playfair Display
- Body: Poppins

## 📱 Páginas Disponibles

- **/** - Página principal
- **/catalogo** - Catálogo de productos
- **/producto/:id** - Detalle de producto
- **/carrito** - Carrito de compras
- **/contacto** - Página de contacto (en construcción)

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build
- `npm run lint` - Ejecutar ESLint
- `npm run deploy` - Desplegar en GitHub Pages

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

Para preguntas o soporte, contacta a [tu-email@ejemplo.com]

# Deploy test: Forzando un nuevo commit para probar GitHub Actions 🚀
