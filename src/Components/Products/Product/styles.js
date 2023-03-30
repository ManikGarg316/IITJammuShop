import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        paddingTop: '56.25%',
    },
    swiperContainer: {
        paddingBottom: '3rem',
        '& .swiper-pagination-bullet': {
            background: 'blue',
    }},
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',        
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    style: {
        height: 32,
      }
}));