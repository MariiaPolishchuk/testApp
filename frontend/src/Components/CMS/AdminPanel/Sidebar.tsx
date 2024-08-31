import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Level } from '../../../types/types';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
// import '../../../styles/AdminBorder.css';
import './admin.css'

interface SidebarProps {
  levels: Level[];
  onLevelSelect: (levelId: string) => void;
  onAddLevel: (levelName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ levels, onLevelSelect, onAddLevel }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [newLevel, setNewLevel] = useState<string>('');
  const [open, setOpen] = useState(true);

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    onLevelSelect(levelId);
  };

  const handleAddLevel = (e: React.FormEvent) => {
    e.preventDefault();
    if (newLevel.trim()) {
      onAddLevel(newLevel);
      setNewLevel(''); // Очистка поля после добавления уровня
    }
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        sx={{ color: '#ecf0f1', marginLeft: 'auto', marginRight: '10px' }}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{ justifyContent: 'center', padding: '20px' }}
        >
          <HomeIcon sx={{ fontSize: 30 }} />
        </ListItem>

        <ListItem button component={Link} to="/admin-panel">
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Admin Panel" />}
        </ListItem>

        <ListItem>
          {open ? (
            <Select
              value={selectedLevel}
              onChange={(e) => handleLevelSelect(e.target.value)}
              displayEmpty
              fullWidth
              sx={{
                backgroundColor: '#34495e',
                color: '#ecf0f1',
                '& .MuiSvgIcon-root': {
                  color: '#ecf0f1',
                },
              }}
            >
              <MenuItem value="" disabled>
                Select Level
              </MenuItem>
              {levels.map((level) => (
                <MenuItem key={level._id.toString()} value={level._id.toString()}>
                  {level.name}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <IconButton
              onClick={toggleSidebar}
              sx={{
                color: '#ecf0f1',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <SchoolIcon />
            </IconButton>
          )}
        </ListItem>

        {/* Форма для добавления нового уровня */}
        {open && (
          <ListItem>
            <form onSubmit={handleAddLevel} style={{ width: '100%', padding: '15px' }}>
              <TextField
                value={newLevel}
                onChange={(e) => setNewLevel(e.target.value)}
                placeholder="New Level"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#34495e',
                  color: '#ecf0f1',
                  marginBottom: '10px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ecf0f1',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1abc9c',
                    },
                  },
                }}
                InputProps={{
                  style: { color: '#ecf0f1' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: '#3498db',
                  color: '#ecf0f1',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#2980b9',
                  },
                }}
              >
                Add Level
              </Button>
            </form>
          </ListItem>
        )}

        {/* Кнопка для создания нового урока */}
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component={Link}
            to="/admin-panel/add-lesson"
            variant="contained"
            sx={{
              width: '100%',
              backgroundColor: open ? '#3498db' : 'transparent',
              color: '#ecf0f1',
              textTransform: 'none',
              marginTop: '15px',
              '&:hover': {
                backgroundColor: open ? '#2980b9' : 'transparent',
              },
              padding: open ? '10px 15px' : '12px',
              justifyContent: 'center',
              boxShadow: open ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
            }}
            startIcon={open ? null : <AddCircleOutlineIcon />}
          >
            {open ? 'Create New Lesson' : ''}
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { Level } from '../../../types/types';
// import HomeIcon from '@mui/icons-material/Home';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import SchoolIcon from '@mui/icons-material/School';
// import './admin.css';

// interface SidebarProps {
//   levels: Level[];
//   onLevelSelect: (levelId: string) => void;
//   onAddLevel: (levelName: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ levels, onLevelSelect, onAddLevel }) => {
//   const [selectedLevel, setSelectedLevel] = useState<string>('');
//   const [newLevel, setNewLevel] = useState<string>('');
//   const [open, setOpen] = useState(true);

//   const handleLevelSelect = (levelId: string) => {
//     setSelectedLevel(levelId);
//     onLevelSelect(levelId);
//   };

//   const handleAddLevel = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newLevel.trim()) {
//       onAddLevel(newLevel);
//       setNewLevel(''); // Очистка поля после добавления уровня
//     }
//   };

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       open={open}
//       sx={{
//         width: open ? 240 : 60,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: open ? 240 : 60,
//           boxSizing: 'border-box',
//           backgroundColor: '#2c3e50',
//           color: '#ecf0f1',
//           transition: 'width 0.3s ease',
//           alignItems: 'center', // Центрирование элементов при сворачивании
//         },
//       }}
//     >
//       <IconButton
//         onClick={toggleSidebar}
//         sx={{ color: '#ecf0f1', marginLeft: open ? 'auto' : '0', marginRight: '10px' }}
//       >
//         {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//       </IconButton>
//       <List>
//         <ListItem
//           button
//           component={Link}
//           to="/"
//           sx={{ justifyContent: 'center', padding: '20px' }}
//         >
//           <HomeIcon sx={{ fontSize: 30 }} />
//         </ListItem>

//         <ListItem button component={Link} to="/admin-panel">
//           <ListItemIcon sx={{ color: '#ecf0f1', justifyContent: 'center' }}>
//             <AdminPanelSettingsIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Admin Panel" />}
//         </ListItem>

//         <ListItem>
//           {open ? (
//             <Select
//               value={selectedLevel}
//               onChange={(e) => handleLevelSelect(e.target.value)}
//               displayEmpty
//               fullWidth
//               sx={{
//                 backgroundColor: '#34495e',
//                 color: '#ecf0f1',
//                 '& .MuiSvgIcon-root': {
//                   color: '#ecf0f1',
//                 },
//               }}
//             >
//               <MenuItem value="" disabled>
//                 Select Level
//               </MenuItem>
//               {levels.map((level) => (
//                 <MenuItem key={level._id.toString()} value={level._id.toString()}>
//                   {level.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           ) : (
//             <IconButton
//               onClick={toggleSidebar}
//               sx={{
//                 color: '#ecf0f1',
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//               }}
//             >
//               <SchoolIcon />
//             </IconButton>
//           )}
//         </ListItem>

//         {/* Форма для добавления нового уровня */}
//         {open && (
//           <ListItem sx={{ width: '100%' }}>
//             <form onSubmit={handleAddLevel} style={{ width: '100%' }}>
//               <TextField
//                 value={newLevel}
//                 onChange={(e) => setNewLevel(e.target.value)}
//                 placeholder="New Level"
//                 variant="outlined"
//                 fullWidth
//                 sx={{
//                   backgroundColor: '#34495e',
//                   color: '#ecf0f1',
//                   marginBottom: '10px',
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: '#ecf0f1',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: '#1abc9c',
//                     },
//                   },
//                 }}
//                 InputProps={{
//                   style: { color: '#ecf0f1' },
//                 }}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   width: '100%',
//                   backgroundColor: '#3498db',
//                   color: '#ecf0f1',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: '#2980b9',
//                   },
//                 }}
//               >
//                 Add Level
//               </Button>
//             </form>
//           </ListItem>
//         )}

//         {/* Кнопка для создания нового урока */}
//         <ListItem
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '100%',
//           }}
//         >
//           <Button
//             component={Link}
//             to="/admin-panel/add-lesson"
//             variant="contained"
//             sx={{
//               width: open ? '80%' : '60%', // Уменьшаем ширину кнопки в свернутом состоянии
//               height: 'auto',
//               backgroundColor: 'transparent', // Убираем фон у кнопки в свернутом состоянии
//               color: '#ecf0f1',
//               textTransform: 'none',
//               marginTop: '15px',
//               '&:hover': {
//                 backgroundColor: 'transparent',
//               },
//               padding: '12px',
//               justifyContent: 'center',
//               minWidth: 0, // Убираем минимальную ширину
//             }}
//             startIcon={<AddCircleOutlineIcon sx={{ fontSize: open ? 30 : 40 }} />} // Увеличиваем иконку
//           >
//             {open && 'Create New Lesson'}
//           </Button>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { Level } from '../../../types/types';
// import HomeIcon from '@mui/icons-material/Home';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import IconButton from '@mui/material/IconButton';
// import '../../../styles/AdminBorder.css';

// interface SidebarProps {
//   levels: Level[];
//   onLevelSelect: (levelId: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ levels, onLevelSelect }) => {
//   const [selectedLevel, setSelectedLevel] = useState<string>('');
//   const [open, setOpen] = useState(true);

//   const handleLevelSelect = (levelId: string) => {
//     setSelectedLevel(levelId);
//     onLevelSelect(levelId);
//   };

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       open={open}
//       sx={{
//         width: open ? 240 : 60,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: open ? 240 : 60,
//           boxSizing: 'border-box',
//           backgroundColor: '#2c3e50', 
//           color: '#ecf0f1',
//           transition: 'width 0.3s ease',
//         },
//       }}
//     >
//       <IconButton onClick={toggleSidebar} sx={{ color: '#ecf0f1', marginLeft: 'auto', marginRight: '10px' }}>
//         {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//       </IconButton>
//       <List>
//         <ListItem
//           button
//           component={Link}
//           to="/"
//           sx={{ justifyContent: 'center', padding: '20px' }}
//         >
//           <HomeIcon sx={{ fontSize: 30 }} />
//         </ListItem>

//         <ListItem button component={Link} to="/admin-panel">
//           <ListItemIcon sx={{ color: '#ecf0f1' }}>
//             <AdminPanelSettingsIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Admin Panel" />}
//         </ListItem>

//         <ListItem>
//           <Select
//             value={selectedLevel}
//             onChange={(e) => handleLevelSelect(e.target.value)}
//             displayEmpty
//             fullWidth
//             sx={{
//               backgroundColor: '#34495e',
//               color: '#ecf0f1',
//               '& .MuiSvgIcon-root': {
//                 color: '#ecf0f1',
//               },
//             }}
//           >
//             <MenuItem value="" disabled>
//               Select Level
//             </MenuItem>
//             {levels.map((level) => (
//               <MenuItem key={level._id.toString()} value={level._id.toString()}>
//                 {level.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
