export const Styles= {
    drawer: {
        width: 320,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', bgcolor:'primary.mainAlt', color: 'primary.contrast' }
    },
    accordion:{'&.MuiAccordion-root':{
        bgcolor:'primary.mainAlt',
        color: 'primary.main'
        }
    },
    accordionDetails:{
        bgcolor:'primary.contrast',
        color: 'primary.main',
        p:0
    },
    listItemButton:{
        bgcolor:'primary.contrast',
        color: 'primary.main'
      }

}