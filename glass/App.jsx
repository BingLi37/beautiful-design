import React from 'react';

// 保持形状精确计算的图标
const Icons = {
  Error: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-5 5" />
      <path d="m9.5 9.5 5 5" />
    </svg>
  ),
  Pending: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" strokeDasharray="4 3.06" transform="rotate(-90 12 12)" />
    </svg>
  ),
  Success: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-4.5" />
    </svg>
  )
};

const VARIANTS = {
  // 取消了 error 和 success 的额外动画类名
  error: { text: 'Error', Icon: Icons.Error, theme: 'error', animClass: '' },
  pending: { text: 'Pending', Icon: Icons.Pending, theme: 'pending', animClass: 'spin-slow' },
  success: { text: 'Success', Icon: Icons.Success, theme: 'success', animClass: '' }
};

const SoftButton = ({ type = 'success', onClick }) => {
  const config = VARIANTS[type];
  const { Icon } = config;

  return (
    <button onClick={onClick} className={`glass-btn glass-btn-${config.theme}`}>
      {/* 图标按比例放大到 22px */}
      <Icon className={`w-[22px] h-[22px] ${config.animClass}`} />
      <span>{config.text}</span>
    </button>
  );
};

const ListItem = ({ children }) => (
  <div className="relative z-10 flex w-full justify-center border-b border-gray-100/60 py-[40px] last:border-0">
    {children}
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FCFDFE] p-6">
      <style>{`
        .glass-btn {
          position: relative;
          border-radius: 9999px;
          font-weight: 500;
          /* 字号按比例放大到 17px */
          font-size: 17px;
          letter-spacing: 0.01em;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;

          /* === 核心排版按比例放大 === */
          /* 间距和留白等比放大，恢复舒展大气的胶囊形状 */
          gap: 12px;
          padding: 12px 20px;

          border: 1px solid rgba(255, 255, 255, 0.7);
          cursor: pointer;
          outline: none;
        }

        .glass-btn:active {
          transform: scale(0.95) translateY(0);
        }

        /* ----- Error 红色 ----- */
        .glass-btn-error {
          color: #F37181;
          background: linear-gradient(180deg, #FFFFFF 0%, #FCE1E5 100%);
          box-shadow: 0 4px 10px rgba(243, 113, 129, 0.04),
            inset 0 0 0 1.5px rgba(243, 113, 129, 0.15),
            inset 0 2px 1px rgba(255, 255, 255, 1),
            inset 0 -2px 1px rgba(255, 255, 255, 0.6);
        }

        /* ----- Pending 蓝色 ----- */
        .glass-btn-pending {
          color: #7885FF;
          background: linear-gradient(180deg, #FFFFFF 0%, #E7EAFF 100%);
          box-shadow: 0 4px 10px rgba(120, 133, 255, 0.04),
            inset 0 0 0 1.5px rgba(120, 133, 255, 0.15),
            inset 0 2px 1px rgba(255, 255, 255, 1),
            inset 0 -2px 1px rgba(255, 255, 255, 0.6);
        }

        /* ----- Success 绿色 ----- */
        .glass-btn-success {
          color: #49D193;
          background: linear-gradient(180deg, #FFFFFF 0%, #DDF8E8 100%);
          box-shadow: 0 4px 10px rgba(73, 209, 147, 0.04),
            inset 0 0 0 1.5px rgba(73, 209, 147, 0.15),
            inset 0 2px 1px rgba(255, 255, 255, 1),
            inset 0 -2px 1px rgba(255, 255, 255, 0.6);
        }

        /* 仅保留必须的加载旋转动画，删除了浮动和缩放 */
        .spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* 外框 */}
      <div className="relative flex w-full max-w-sm flex-col rounded-3xl border border-gray-100/50 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
        <ListItem>
          <SoftButton type="error" />
        </ListItem>
        <ListItem>
          <SoftButton type="pending" />
        </ListItem>
        <ListItem>
          <SoftButton type="pending" />
        </ListItem>
        <ListItem>
          <SoftButton type="success" />
        </ListItem>
        <ListItem>
          <SoftButton type="success" />
        </ListItem>
      </div>
    </div>
  );
}
