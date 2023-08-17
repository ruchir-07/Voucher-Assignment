import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InputBox from "./_inputbox";


const Footer = () => {
  return (
    <>
      <Box padding={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          height="30vh"
        >
          <Box width="50%"
          marginTop={7}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          >
            <svg width="178" height="30" viewBox="0 0 178 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1245_165)">
                <path d="M32.9097 8.02854C32.6996 8.23781 27.3337 12.6208 20.0913 9.20202C10.4151 4.62154 4.10736 11.0503 3.83674 11.3397C3.80047 11.3831 3.76658 11.4288 3.73527 11.4766C3.67277 11.5178 3.61325 11.5643 3.55723 11.6155C1.40124 13.5987 0.265381 16.0102 0.265381 18.5801C0.265381 24.9853 7.3458 30.0019 16.3846 30.0019C25.3682 30.0019 32.4166 25.0459 32.5038 18.6994C32.6673 16.6929 32.1315 14.6931 31.0047 13.1038C33.4492 12.0829 34.8948 10.6591 35.0141 10.532C35.3163 10.2254 35.4952 9.79953 35.5116 9.34802C35.5279 8.89651 35.3804 8.45635 35.1013 8.12438C34.8223 7.7924 34.4346 7.59581 34.0236 7.57783C33.6126 7.55986 33.2119 7.72199 32.9097 8.02854ZM16.3792 26.5988C10.3368 26.5988 5.10257 23.9057 3.72102 20.4068C4.94412 19.245 9.37004 15.797 15.6493 19.4289C18.6349 21.1539 21.2983 21.7465 23.5505 21.7465C25.4248 21.7525 27.2794 21.3268 28.9947 20.4968C27.5723 23.9487 22.3737 26.5988 16.3792 26.5988ZM17.1074 16.4091C11.786 13.3346 7.1375 14.3047 4.06641 16.0512C4.47265 15.3567 4.97409 14.7353 5.55299 14.2089C5.62386 14.1428 5.68884 14.0694 5.74705 13.9898C5.84018 13.9266 5.92727 13.8532 6.00698 13.7708C6.21706 13.5478 11.2341 8.38841 18.7756 12.2765C21.6936 13.7805 24.3178 14.2323 26.5664 14.115C26.8886 14.0993 27.2037 14.072 27.5099 14.0348C28.2725 14.6677 28.8575 15.5238 29.1977 16.505C28.1295 17.3323 23.6786 20.2014 17.1074 16.4091Z" fill="black" />
                <path d="M2.62952 7.64324C2.84851 7.43201 8.68802 0.876174 18.0277 4.69389C21.1557 5.97103 23.5717 6.64969 25.8149 6.53235C30.9209 6.27614 34.0757 3.13708 34.2626 2.94737C34.5648 2.64081 34.7438 2.21493 34.7601 1.76342C34.7765 1.31191 34.6289 0.871751 34.3498 0.539777C34.0708 0.207802 33.6831 0.0112043 33.2721 -0.00676808C32.8611 -0.0247405 32.4604 0.137385 32.1583 0.443943C31.9482 0.653213 26.6392 4.79755 19.3398 1.61742C8.38536 -3.18602 0.73346 4.9149 0.462849 5.20436C0.168447 5.51999 0.00024047 5.95118 -0.00476771 6.40305C-0.00977589 6.85493 0.148825 7.29049 0.436144 7.6139C0.723462 7.93732 1.11596 8.1221 1.5273 8.1276C1.93864 8.13311 2.33512 7.95888 2.62952 7.64324Z" fill="black" />
                <path d="M60.2502 10.5868C59.3829 9.9936 58.3769 9.69115 57.3554 9.71643C56.2658 9.68791 55.1885 9.97384 54.2309 10.5457C53.5522 10.9733 52.9249 11.4923 52.3633 12.0908V4.76435C52.3619 4.2914 52.1905 3.8382 51.8864 3.50341C51.5823 3.16861 51.1702 2.97932 50.7397 2.97675C50.5265 2.97274 50.3149 3.01763 50.1184 3.10855C49.9219 3.19948 49.7448 3.33444 49.5985 3.50481C49.4495 3.67077 49.3321 3.86757 49.2529 4.08378C49.1738 4.3 49.1345 4.53133 49.1374 4.76435V25.1047C49.135 25.3365 49.1748 25.5666 49.2545 25.7814C49.3341 25.9961 49.4521 26.1912 49.6013 26.3552C49.7506 26.5191 49.9282 26.6487 50.1237 26.7362C50.3192 26.8238 50.5286 26.8675 50.7397 26.8649C50.9517 26.8683 51.1622 26.8254 51.359 26.7388C51.5558 26.6522 51.735 26.5235 51.8862 26.3603C52.0415 26.2 52.1646 26.0059 52.2477 25.7904C52.3307 25.5748 52.372 25.3426 52.3687 25.1086V15.8263C52.9315 15.0435 53.6004 14.3601 54.352 13.8001C55.0593 13.2936 55.888 13.0301 56.7323 13.0432C58.6586 13.0432 59.5559 14.1483 59.5559 16.5207V25.1105C59.553 25.3426 59.5925 25.5729 59.672 25.7879C59.7515 26.0028 59.8694 26.1981 60.0188 26.3622C60.1682 26.5263 60.346 26.6558 60.5417 26.7432C60.7374 26.8305 60.947 26.8739 61.1582 26.8707C61.3702 26.8742 61.5807 26.8313 61.7775 26.7447C61.9743 26.6581 62.1535 26.5294 62.3048 26.3661C62.4604 26.2062 62.5837 26.0121 62.6668 25.7965C62.7499 25.5809 62.791 25.3485 62.7872 25.1144V16.2058C62.7943 15.0815 62.571 13.9699 62.1338 12.9533C61.722 11.9849 61.0689 11.1644 60.2502 10.5868Z" fill="black" />
                <path d="M76.8021 10.796C75.5697 10.0868 74.1992 9.71637 72.8079 9.71637C71.4167 9.71637 70.0461 10.0868 68.8137 10.796C67.6691 11.5111 66.7406 12.5794 66.1432 13.8686C65.5053 15.263 65.1846 16.8065 65.2085 18.3669C65.1845 19.9273 65.5052 21.4709 66.1432 22.8652C66.7406 24.1544 67.6691 25.2227 68.8137 25.9378C70.0461 26.647 71.4167 27.0174 72.8079 27.0174C74.1992 27.0174 75.5697 26.647 76.8021 25.9378C77.9486 25.2257 78.8834 24.1648 79.494 22.8828C80.1414 21.4916 80.4673 19.9468 80.4429 18.3845C80.4671 16.8223 80.1412 15.2775 79.494 13.8862C78.8884 12.5912 77.9532 11.5176 76.8021 10.796ZM76.5546 21.4219C76.1719 22.1652 75.6027 22.7721 74.915 23.1703C74.2608 23.5358 73.5373 23.7264 72.8035 23.7264C72.0696 23.7264 71.3461 23.5358 70.692 23.1703C70.0062 22.7749 69.4406 22.1678 69.0648 21.4238C68.6393 20.6259 68.4238 19.5873 68.4238 18.3376C68.4238 17.0878 68.6393 16.0845 69.0648 15.2846C69.4386 14.5447 70.0036 13.9431 70.6884 13.5556C71.3523 13.1941 72.0839 13.0079 72.8248 13.0119C73.5534 13.0119 74.272 13.1981 74.9239 13.5556C75.6123 13.9441 76.1818 14.5459 76.5618 15.2865C76.9962 16.0864 77.2169 17.1132 77.2169 18.3376C77.2169 19.5619 76.9944 20.6219 76.5546 21.4219Z" fill="black" />
                <path d="M89.3731 23.54C89.2398 23.5378 89.1067 23.5516 88.9761 23.5811L88.7108 23.6495C88.3702 23.7629 88.0163 23.8209 87.6604 23.8216C87.2542 23.8398 86.8506 23.7421 86.489 23.538C86.1845 23.3425 86.1222 22.7557 86.1222 22.2883V13.6378H89.0295C89.2211 13.643 89.4116 13.6039 89.5886 13.5231C89.7655 13.4422 89.925 13.3214 90.0568 13.1684C90.2568 12.9482 90.3925 12.6675 90.4466 12.3621C90.5007 12.0567 90.4707 11.7406 90.3604 11.454C90.2502 11.1675 90.0647 10.9235 89.8276 10.7534C89.5905 10.5832 89.3127 10.4946 89.0295 10.4987H86.1258V7.26774C86.1258 6.79727 85.9556 6.34607 85.6528 6.0134C85.35 5.68073 84.9393 5.49384 84.511 5.49384C84.0827 5.49384 83.672 5.68073 83.3692 6.0134C83.0664 6.34607 82.8962 6.79727 82.8962 7.26774V22.5386C82.8962 25.4723 84.4469 27.0233 87.3791 27.0233C88.2471 27.027 89.1052 26.8214 89.893 26.4209C90.1396 26.2997 90.3489 26.1026 90.4956 25.8533C90.6422 25.6041 90.7198 25.3134 90.719 25.0166C90.7214 24.8197 90.686 24.6244 90.6151 24.4434C90.5443 24.2625 90.4395 24.0999 90.3078 23.9664C90.1854 23.8309 90.0397 23.7235 89.8793 23.6503C89.7189 23.5772 89.5468 23.5396 89.3731 23.54Z" fill="black" />
                <path d="M110.381 10.7569C109.314 10.0807 108.104 9.72461 106.872 9.72423C105.186 9.71521 103.557 10.3996 102.307 11.6429V4.76432C102.313 4.52774 102.276 4.29226 102.196 4.07233C102.116 3.85239 101.997 3.65263 101.844 3.48527C101.692 3.31791 101.51 3.18648 101.31 3.09904C101.11 3.01159 100.895 2.96997 100.68 2.97672C100.467 2.97247 100.255 3.01725 100.059 3.10819C99.8621 3.19913 99.685 3.33422 99.5388 3.50479C99.3902 3.67091 99.2731 3.86777 99.1943 4.08398C99.1154 4.30019 99.0764 4.53143 99.0795 4.76432V25.1046C99.0766 25.3367 99.1161 25.567 99.1956 25.782C99.2751 25.9969 99.393 26.1922 99.5424 26.3563C99.6918 26.5204 99.8696 26.6499 100.065 26.7373C100.261 26.8246 100.471 26.868 100.682 26.8648C100.894 26.868 101.104 26.825 101.3 26.7384C101.497 26.6518 101.676 26.5233 101.827 26.3602C101.982 26.2003 102.106 26.0062 102.189 25.7906C102.272 25.575 102.313 25.3426 102.309 25.1085C103.559 26.3519 105.188 27.0364 106.874 27.0272C108.105 27.0255 109.315 26.6681 110.381 25.9906C111.51 25.2734 112.439 24.2313 113.068 22.9767C113.748 21.6663 114.093 20.1154 114.093 18.3708C114.093 16.6262 113.748 15.0733 113.068 13.763C112.438 12.5112 111.509 11.472 110.381 10.7569ZM109.669 22.2961C108.868 23.2153 107.832 23.6652 106.5 23.6652C105.692 23.6684 104.896 23.4613 104.175 23.0608C103.476 22.6721 102.844 22.1526 102.307 21.5255V15.2142C102.844 14.5877 103.476 14.0682 104.175 13.6789C104.896 13.2786 105.692 13.0715 106.5 13.0745C107.83 13.0745 108.868 13.5204 109.669 14.4436C110.47 15.3667 110.865 16.6771 110.865 18.3747C110.865 20.0724 110.463 21.3886 109.669 22.2961Z" fill="black" />
                <path d="M160.391 10.5868C159.523 9.99334 158.516 9.69088 157.494 9.71644C156.405 9.68826 155.329 9.97418 154.372 10.5457C153.692 10.9733 153.064 11.493 152.502 12.0927V11.6605C152.502 11.1866 152.33 10.7322 152.025 10.397C151.72 10.0619 151.307 9.87342 150.875 9.8729C150.662 9.86865 150.45 9.91343 150.254 10.0044C150.057 10.0953 149.88 10.2304 149.734 10.401C149.585 10.5671 149.468 10.764 149.389 10.9802C149.31 11.1964 149.271 11.4276 149.275 11.6605V25.1105C149.272 25.3424 149.312 25.5725 149.392 25.7872C149.471 26.002 149.589 26.1971 149.739 26.361C149.888 26.525 150.065 26.6546 150.261 26.7421C150.456 26.8296 150.666 26.8734 150.877 26.8708C151.089 26.8739 151.299 26.8309 151.495 26.7443C151.692 26.6577 151.871 26.5292 152.022 26.3662C152.177 26.2062 152.301 26.0121 152.384 25.7965C152.467 25.5809 152.508 25.3486 152.504 25.1145V15.8264C153.068 15.0444 153.737 14.3612 154.487 13.8001C155.195 13.2937 156.025 13.0303 156.87 13.0433C158.796 13.0433 159.691 14.1483 159.691 16.5207V25.1105C159.689 25.3424 159.729 25.5725 159.808 25.7872C159.888 26.002 160.006 26.1971 160.155 26.361C160.305 26.525 160.482 26.6546 160.678 26.7421C160.873 26.8296 161.083 26.8734 161.294 26.8708C161.506 26.8742 161.716 26.8313 161.913 26.7447C162.11 26.6581 162.289 26.5294 162.44 26.3662C162.595 26.2059 162.719 26.0118 162.802 25.7962C162.885 25.5807 162.926 25.3485 162.923 25.1145V16.2058C162.933 15.0822 162.712 13.9707 162.278 12.9533C161.865 11.9844 161.211 11.1638 160.391 10.5868Z" fill="black" />
                <path d="M176.669 19.2099C176.148 18.5334 175.482 18.0098 174.732 17.6863C173.82 17.3117 172.889 16.9976 171.944 16.7456C170.852 16.4815 170.042 16.2077 169.535 15.928C169.344 15.8422 169.182 15.6941 169.07 15.5039C168.958 15.3136 168.903 15.0903 168.91 14.8641C168.91 14.338 169.148 13.9155 169.635 13.5732C170.169 13.2036 170.915 13.0178 171.876 13.0178C172.954 13.0255 174.025 13.2121 175.052 13.5713C175.198 13.6151 175.349 13.6394 175.501 13.6437C175.695 13.6478 175.889 13.6069 176.068 13.5236C176.248 13.4404 176.409 13.3167 176.542 13.1606C176.677 13.014 176.785 12.8391 176.857 12.6463C176.93 12.4535 176.967 12.2467 176.966 12.0379C176.964 11.7091 176.871 11.3888 176.697 11.1207C176.515 10.8268 176.244 10.6138 175.932 10.5202C174.57 9.97934 173.133 9.70721 171.685 9.71641C169.827 9.71641 168.37 10.2093 167.356 11.1813C166.853 11.6528 166.453 12.2417 166.185 12.905C165.917 13.5683 165.787 14.2891 165.805 15.0147C165.805 16.1451 166.097 17.0722 166.672 17.7704C167.221 18.4428 167.908 18.9628 168.675 19.2881C169.594 19.6646 170.536 19.9724 171.493 20.2093C172.288 20.413 173.067 20.689 173.82 21.0346C174.31 21.2889 174.367 21.6038 174.367 21.8169C174.367 22.2805 174.367 23.6945 171.518 23.6945C170.852 23.7034 170.188 23.6226 169.54 23.4539C168.93 23.2871 168.335 23.0634 167.76 22.7851C167.559 22.6839 167.34 22.6306 167.119 22.6286C166.925 22.6234 166.732 22.6644 166.554 22.7488C166.376 22.8332 166.216 22.959 166.086 23.1175C165.828 23.418 165.685 23.817 165.689 24.2304C165.684 24.4895 165.738 24.7458 165.847 24.976C165.955 25.2063 166.114 25.4031 166.309 25.5486L166.339 25.5682C167.978 26.5431 169.816 27.0432 171.68 27.0213C173.498 27.0213 174.935 26.5519 175.953 25.6249C176.443 25.1968 176.838 24.6509 177.106 24.029C177.374 23.4072 177.509 22.726 177.5 22.0379C177.5 20.8723 177.221 19.9198 176.669 19.2099Z" fill="black" />
                <path d="M127.157 10.7862C126.01 10.0107 124.683 9.61612 123.337 9.64989C121.779 9.64989 120.442 10.0606 119.365 10.8723C118.305 11.661 117.473 12.7675 116.968 14.0602C116.45 15.398 116.19 16.8389 116.203 18.2926C116.203 21.0013 116.89 23.141 118.247 24.6509C119.603 26.1607 121.505 26.9333 123.899 26.9333C125.701 27.0222 127.486 26.5277 129.034 25.5114C129.796 25.0283 129.954 24.426 129.954 24.0074C129.958 23.7872 129.919 23.5687 129.839 23.3664C129.76 23.1641 129.643 22.9826 129.495 22.8339C129.212 22.542 128.838 22.3809 128.45 22.3841C128.216 22.3813 127.985 22.4389 127.775 22.5523C127.244 22.8449 126.686 23.0744 126.11 23.2368C125.46 23.404 124.793 23.4828 124.125 23.4715C122.737 23.4715 121.651 23.0999 120.894 22.3645C120.266 21.7362 119.838 20.9034 119.673 19.9882L119.609 19.6949H128.761C128.981 19.7057 129.201 19.6666 129.407 19.5801C129.612 19.4935 129.799 19.3613 129.956 19.1917C130.113 19.0222 130.237 18.8188 130.319 18.5945C130.402 18.3701 130.441 18.1295 130.435 17.8877C130.447 16.477 130.164 15.082 129.609 13.8099C129.064 12.5711 128.215 11.524 127.157 10.7862ZM119.587 16.5832C119.614 16.3876 119.651 16.2077 119.651 16.2077C119.74 15.6603 119.926 15.1373 120.198 14.6685C120.54 14.0788 121.025 13.6049 121.597 13.2994C122.138 13.0103 122.732 12.86 123.333 12.86C123.935 12.86 124.528 13.0103 125.069 13.2994C125.648 13.6051 126.141 14.0784 126.493 14.6685C126.822 15.222 127.031 15.8509 127.104 16.5069L127.113 16.5754L119.587 16.5832Z" fill="black" />
                <path d="M142.744 10.6415C141.795 10.0274 140.624 9.71643 139.26 9.71643C137.52 9.72367 135.799 10.1168 134.2 10.8723C133.919 10.9833 133.678 11.1891 133.51 11.4604C133.342 11.7316 133.256 12.0543 133.266 12.3822C133.262 12.5848 133.297 12.7861 133.366 12.9738C133.436 13.1614 133.54 13.3314 133.672 13.4735C133.796 13.6162 133.946 13.7294 134.112 13.8061C134.278 13.8828 134.456 13.9214 134.636 13.9194C134.796 13.9144 134.955 13.8875 135.108 13.8393C135.709 13.6157 136.32 13.4309 136.94 13.2858C137.555 13.1581 138.179 13.0972 138.804 13.1039C140.029 13.1039 140.941 13.3796 141.489 13.9234C142.012 14.4377 142.287 15.2924 142.31 16.4913V16.8199C141.144 16.5891 139.167 16.3368 137.2 16.7006C135.924 16.9118 134.886 17.3401 134.09 17.9914C133.518 18.4426 133.055 19.0409 132.742 19.734C132.428 20.4272 132.275 21.194 132.294 21.9676C132.279 22.9133 132.515 23.8434 132.972 24.645C133.415 25.4145 134.049 26.0292 134.799 26.417C135.568 26.8214 136.411 27.0287 137.264 27.0233C139.244 27.0233 140.939 26.374 142.313 25.0929V25.1105C142.311 25.3424 142.351 25.5725 142.43 25.7872C142.51 26.002 142.628 26.1971 142.777 26.361C142.927 26.525 143.104 26.6546 143.3 26.7421C143.495 26.8296 143.705 26.8734 143.916 26.8707C144.128 26.8741 144.338 26.8313 144.535 26.7447C144.732 26.6581 144.911 26.5294 145.062 26.3661C145.217 26.2058 145.34 26.0116 145.423 25.796C145.506 25.5805 145.547 25.3483 145.543 25.1144V16.2332C145.55 15.1288 145.319 14.0382 144.868 13.0511C144.388 12.0386 143.65 11.2014 142.744 10.6415ZM142.312 21.6859C141.796 22.2987 141.187 22.8071 140.512 23.188C139.81 23.6004 139.028 23.818 138.233 23.8217C137.234 23.8217 136.522 23.6261 136.118 23.2212C135.919 23.0254 135.762 22.7834 135.659 22.5127C135.557 22.242 135.51 21.9496 135.523 21.6566C135.523 20.7315 136.111 20.1076 137.255 19.7868C137.28 19.7868 137.359 19.7595 137.384 19.7536C139.36 19.2842 141.505 19.7399 142.312 19.9335V21.6859Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1245_165">
                  <rect width="177.5" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Box marginTop={2} marginBottom={1}>
              <Typography sx={{ color: "#122460", marginBottom:2 }}>Sign up for offers and more</Typography>
              <Box width="50%" marginBottom={2}>
              <InputBox text="Enter your email here" />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="15%"
              >
                <TwitterIcon sx={{ color: "#8B94B2", cursor: "pointer" }} />
                <FacebookIcon sx={{ color: "#8B94B2", cursor: "pointer" }} />
                <LinkedInIcon sx={{ color: "#8B94B2", cursor: "pointer" }} />
              </Box>
            </Box>
          </Box>

          <Box width="15%"
            height="50%"
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <Typography fontWeight={700} sx={{ color: "#001246" }}>Discover</Typography>
            <NavLink to="/coupons" style={{ textDecoration: "none" }}><Typography sx={{ color: "#38477B" }}>Bestsellers</Typography></NavLink>
            <NavLink to="/coupons" style={{ textDecoration: "none" }}><Typography sx={{ color: "#38477B" }}>Shop all</Typography></NavLink>
            <NavLink to="/sales" style={{ textDecoration: "none" }}><Typography sx={{ color: "#D9534F" }}>% Sales</Typography></NavLink>
          </Box>

          <Box width="15%"
            height="50%"
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <Typography fontWeight={700} sx={{ color: "#001246" }}>About</Typography>
            <Typography sx={{ color: "#38477B" }}>Help Center</Typography>
            <Typography sx={{ color: "#38477B" }}>Shipping/Returns</Typography>
            <Typography sx={{ color: "#38477B" }}>Affiliates</Typography>
          </Box>

          <Box width="15%"
            height="50%"
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <Typography fontWeight={700} sx={{ color: "#001246" }}>Legal</Typography>
            <Typography sx={{ color: "#38477B" }}>Contact</Typography>
            <Typography sx={{ color: "#38477B" }}>Privacy Policies</Typography>
            <Typography sx={{ color: "#38477B" }}>Terms & Conditions</Typography>
          </Box>
        </Box>

        <Box marginTop={5}>
          <Typography sx={{ color: "#6C7594", fontSize: "12px" }}>&copy; 2021 voucherify</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer;
