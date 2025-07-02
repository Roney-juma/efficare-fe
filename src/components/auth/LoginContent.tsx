// ===== Login Content Component =====
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LoginForm } from '@/components/auth/LoginForm';

export const LoginContent: React.FC = () => {
  return <LoginForm />;
};
